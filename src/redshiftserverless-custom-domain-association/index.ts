/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/redshiftserverless_custom_domain_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftserverlessCustomDomainAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_certificate_arn RedshiftserverlessCustomDomainAssociation#custom_domain_certificate_arn}
  */
  readonly customDomainCertificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_name RedshiftserverlessCustomDomainAssociation#custom_domain_name}
  */
  readonly customDomainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/redshiftserverless_custom_domain_association#workgroup_name RedshiftserverlessCustomDomainAssociation#workgroup_name}
  */
  readonly workgroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/redshiftserverless_custom_domain_association aws_redshiftserverless_custom_domain_association}
*/
export class RedshiftserverlessCustomDomainAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshiftserverless_custom_domain_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftserverlessCustomDomainAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftserverlessCustomDomainAssociation to import
  * @param importFromId The id of the existing RedshiftserverlessCustomDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/redshiftserverless_custom_domain_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftserverlessCustomDomainAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshiftserverless_custom_domain_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/redshiftserverless_custom_domain_association aws_redshiftserverless_custom_domain_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftserverlessCustomDomainAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftserverlessCustomDomainAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshiftserverless_custom_domain_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDomainCertificateArn = config.customDomainCertificateArn;
    this._customDomainName = config.customDomainName;
    this._workgroupName = config.workgroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_domain_certificate_arn - computed: false, optional: false, required: true
  private _customDomainCertificateArn?: string; 
  public get customDomainCertificateArn() {
    return this.getStringAttribute('custom_domain_certificate_arn');
  }
  public set customDomainCertificateArn(value: string) {
    this._customDomainCertificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainCertificateArnInput() {
    return this._customDomainCertificateArn;
  }

  // custom_domain_certificate_expiry_time - computed: true, optional: false, required: false
  public get customDomainCertificateExpiryTime() {
    return this.getStringAttribute('custom_domain_certificate_expiry_time');
  }

  // custom_domain_name - computed: false, optional: false, required: true
  private _customDomainName?: string; 
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }
  public set customDomainName(value: string) {
    this._customDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainNameInput() {
    return this._customDomainName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // workgroup_name - computed: false, optional: false, required: true
  private _workgroupName?: string; 
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
  }
  public set workgroupName(value: string) {
    this._workgroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupNameInput() {
    return this._workgroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_domain_certificate_arn: cdktf.stringToTerraform(this._customDomainCertificateArn),
      custom_domain_name: cdktf.stringToTerraform(this._customDomainName),
      workgroup_name: cdktf.stringToTerraform(this._workgroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_domain_certificate_arn: {
        value: cdktf.stringToHclTerraform(this._customDomainCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domain_name: {
        value: cdktf.stringToHclTerraform(this._customDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workgroup_name: {
        value: cdktf.stringToHclTerraform(this._workgroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
