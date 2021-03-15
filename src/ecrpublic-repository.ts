// https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrpublicRepositoryConfig extends cdktf.TerraformMetaArguments {
  readonly forceDestroy?: boolean;
  readonly repositoryName: string;
  /** catalog_data block */
  readonly catalogData?: EcrpublicRepositoryCatalogData[];
  /** timeouts block */
  readonly timeouts?: EcrpublicRepositoryTimeouts;
}
export interface EcrpublicRepositoryCatalogData {
  readonly aboutText?: string;
  readonly architectures?: string[];
  readonly description?: string;
  readonly logoImageBlob?: string;
  readonly operatingSystems?: string[];
  readonly usageText?: string;
}

function ecrpublicRepositoryCatalogDataToTerraform(struct?: EcrpublicRepositoryCatalogData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    about_text: cdktf.stringToTerraform(struct!.aboutText),
    architectures: cdktf.listMapper(cdktf.stringToTerraform)(struct!.architectures),
    description: cdktf.stringToTerraform(struct!.description),
    logo_image_blob: cdktf.stringToTerraform(struct!.logoImageBlob),
    operating_systems: cdktf.listMapper(cdktf.stringToTerraform)(struct!.operatingSystems),
    usage_text: cdktf.stringToTerraform(struct!.usageText),
  }
}

export interface EcrpublicRepositoryTimeouts {
  readonly delete?: string;
}

function ecrpublicRepositoryTimeoutsToTerraform(struct?: EcrpublicRepositoryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class EcrpublicRepository extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcrpublicRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecrpublic_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._forceDestroy = config.forceDestroy;
    this._repositoryName = config.repositoryName;
    this._catalogData = config.catalogData;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName: string;
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName
  }

  // repository_uri - computed: true, optional: false, required: false
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }

  // catalog_data - computed: false, optional: true, required: false
  private _catalogData?: EcrpublicRepositoryCatalogData[];
  public get catalogData() {
    return this.interpolationForAttribute('catalog_data') as any;
  }
  public set catalogData(value: EcrpublicRepositoryCatalogData[] ) {
    this._catalogData = value;
  }
  public resetCatalogData() {
    this._catalogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogDataInput() {
    return this._catalogData
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EcrpublicRepositoryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EcrpublicRepositoryTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      catalog_data: cdktf.listMapper(ecrpublicRepositoryCatalogDataToTerraform)(this._catalogData),
      timeouts: ecrpublicRepositoryTimeoutsToTerraform(this._timeouts),
    };
  }
}
