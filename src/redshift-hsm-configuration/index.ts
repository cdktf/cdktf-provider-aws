/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftHsmConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}
  */
  readonly hsmConfigurationIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}
  */
  readonly hsmIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}
  */
  readonly hsmPartitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}
  */
  readonly hsmPartitionPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}
  */
  readonly hsmServerPublicCertificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#region RedshiftHsmConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration aws_redshift_hsm_configuration}
*/
export class RedshiftHsmConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_hsm_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftHsmConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftHsmConfiguration to import
  * @param importFromId The id of the existing RedshiftHsmConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftHsmConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_hsm_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_hsm_configuration aws_redshift_hsm_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftHsmConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftHsmConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_hsm_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
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
    this._hsmConfigurationIdentifier = config.hsmConfigurationIdentifier;
    this._hsmIpAddress = config.hsmIpAddress;
    this._hsmPartitionName = config.hsmPartitionName;
    this._hsmPartitionPassword = config.hsmPartitionPassword;
    this._hsmServerPublicCertificate = config.hsmServerPublicCertificate;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hsm_configuration_identifier - computed: false, optional: false, required: true
  private _hsmConfigurationIdentifier?: string; 
  public get hsmConfigurationIdentifier() {
    return this.getStringAttribute('hsm_configuration_identifier');
  }
  public set hsmConfigurationIdentifier(value: string) {
    this._hsmConfigurationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmConfigurationIdentifierInput() {
    return this._hsmConfigurationIdentifier;
  }

  // hsm_ip_address - computed: false, optional: false, required: true
  private _hsmIpAddress?: string; 
  public get hsmIpAddress() {
    return this.getStringAttribute('hsm_ip_address');
  }
  public set hsmIpAddress(value: string) {
    this._hsmIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmIpAddressInput() {
    return this._hsmIpAddress;
  }

  // hsm_partition_name - computed: false, optional: false, required: true
  private _hsmPartitionName?: string; 
  public get hsmPartitionName() {
    return this.getStringAttribute('hsm_partition_name');
  }
  public set hsmPartitionName(value: string) {
    this._hsmPartitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmPartitionNameInput() {
    return this._hsmPartitionName;
  }

  // hsm_partition_password - computed: false, optional: false, required: true
  private _hsmPartitionPassword?: string; 
  public get hsmPartitionPassword() {
    return this.getStringAttribute('hsm_partition_password');
  }
  public set hsmPartitionPassword(value: string) {
    this._hsmPartitionPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmPartitionPasswordInput() {
    return this._hsmPartitionPassword;
  }

  // hsm_server_public_certificate - computed: false, optional: false, required: true
  private _hsmServerPublicCertificate?: string; 
  public get hsmServerPublicCertificate() {
    return this.getStringAttribute('hsm_server_public_certificate');
  }
  public set hsmServerPublicCertificate(value: string) {
    this._hsmServerPublicCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmServerPublicCertificateInput() {
    return this._hsmServerPublicCertificate;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      hsm_configuration_identifier: cdktf.stringToTerraform(this._hsmConfigurationIdentifier),
      hsm_ip_address: cdktf.stringToTerraform(this._hsmIpAddress),
      hsm_partition_name: cdktf.stringToTerraform(this._hsmPartitionName),
      hsm_partition_password: cdktf.stringToTerraform(this._hsmPartitionPassword),
      hsm_server_public_certificate: cdktf.stringToTerraform(this._hsmServerPublicCertificate),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsm_configuration_identifier: {
        value: cdktf.stringToHclTerraform(this._hsmConfigurationIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsm_ip_address: {
        value: cdktf.stringToHclTerraform(this._hsmIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsm_partition_name: {
        value: cdktf.stringToHclTerraform(this._hsmPartitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsm_partition_password: {
        value: cdktf.stringToHclTerraform(this._hsmPartitionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsm_server_public_certificate: {
        value: cdktf.stringToHclTerraform(this._hsmServerPublicCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
