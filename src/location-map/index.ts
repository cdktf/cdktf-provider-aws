// https://www.terraform.io/docs/providers/aws/r/location_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_map#description LocationMap#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_map#id LocationMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_map#map_name LocationMap#map_name}
  */
  readonly mapName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_map#tags LocationMap#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_map#tags_all LocationMap#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_map#configuration LocationMap#configuration}
  */
  readonly configuration: LocationMapConfiguration;
}
export interface LocationMapConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_map#style LocationMap#style}
  */
  readonly style: string;
}

export function locationMapConfigurationToTerraform(struct?: LocationMapConfigurationOutputReference | LocationMapConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    style: cdktf.stringToTerraform(struct!.style),
  }
}

export class LocationMapConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LocationMapConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationMapConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._style = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._style = value.style;
    }
  }

  // style - computed: false, optional: false, required: true
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/location_map aws_location_map}
*/
export class LocationMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_location_map";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/location_map aws_location_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationMapConfig
  */
  public constructor(scope: Construct, id: string, config: LocationMapConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_location_map',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._mapName = config.mapName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // map_arn - computed: true, optional: false, required: false
  public get mapArn() {
    return this.getStringAttribute('map_arn');
  }

  // map_name - computed: false, optional: false, required: true
  private _mapName?: string; 
  public get mapName() {
    return this.getStringAttribute('map_name');
  }
  public set mapName(value: string) {
    this._mapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapNameInput() {
    return this._mapName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new LocationMapConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: LocationMapConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      map_name: cdktf.stringToTerraform(this._mapName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      configuration: locationMapConfigurationToTerraform(this._configuration.internalValue),
    };
  }
}
