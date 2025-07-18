/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#id AppmeshVirtualNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#mesh_name AppmeshVirtualNode#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#mesh_owner AppmeshVirtualNode#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#name AppmeshVirtualNode#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#region AppmeshVirtualNode#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#tags AppmeshVirtualNode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#tags_all AppmeshVirtualNode#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#spec AppmeshVirtualNode#spec}
  */
  readonly spec: AppmeshVirtualNodeSpec;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileList",
    },
    sds: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return cdktf.Fn.tolist(this.getListAttribute('exact'));
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorityArns),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateAuthorityArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityArns = value.certificateAuthorityArns;
    }
  }

  // certificate_authority_arns - computed: false, optional: false, required: true
  private _certificateAuthorityArns?: string[]; 
  public get certificateAuthorityArns() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_authority_arns'));
  }
  public set certificateAuthorityArns(value: string[]) {
    this._certificateAuthorityArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnsInput() {
    return this._certificateAuthorityArns;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
  /**
  * acm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmList",
    },
    file: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileList",
    },
    sds: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesList",
    },
    trust: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#enforce AppmeshVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#ports AppmeshVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#validation AppmeshVirtualNode#validation}
  */
  readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    certificate: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    certificate: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateList",
    },
    validation: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._ports = undefined;
      this._certificate.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._ports = value.ports;
      this._certificate.internalValue = value.certificate;
      this._validation.internalValue = value.validation;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct!.tls),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls.internalValue = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#virtual_service_name AppmeshVirtualNode#virtual_service_name}
  */
  readonly virtualServiceName: string;
  /**
  * client_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#client_policy AppmeshVirtualNode#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference | AppmeshVirtualNodeSpecBackendVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    client_policy: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct!.clientPolicy),
  }
}


export function appmeshVirtualNodeSpecBackendVirtualServiceToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference | AppmeshVirtualNodeSpecBackendVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_policy: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    if (this._clientPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPolicy = this._clientPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
      this._clientPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
      this._clientPolicy.internalValue = value.clientPolicy;
    }
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName;
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy) {
    this._clientPolicy.internalValue = value;
  }
  public resetClientPolicy() {
    this._clientPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPolicyInput() {
    return this._clientPolicy.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackend {
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#virtual_service AppmeshVirtualNode#virtual_service}
  */
  readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService;
}

export function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function appmeshVirtualNodeSpecBackendToHclTerraform(struct?: AppmeshVirtualNodeSpecBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service: {
      value: appmeshVirtualNodeSpecBackendVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendVirtualServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: AppmeshVirtualNodeSpecBackendVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}

export class AppmeshVirtualNodeSpecBackendList extends cdktf.ComplexList {
  public internalValue? : AppmeshVirtualNodeSpecBackend[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppmeshVirtualNodeSpecBackendOutputReference {
    return new AppmeshVirtualNodeSpecBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileList",
    },
    sds: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return cdktf.Fn.tolist(this.getListAttribute('exact'));
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorityArns),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateAuthorityArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityArns = value.certificateAuthorityArns;
    }
  }

  // certificate_authority_arns - computed: false, optional: false, required: true
  private _certificateAuthorityArns?: string[]; 
  public get certificateAuthorityArns() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_authority_arns'));
  }
  public set certificateAuthorityArns(value: string[]) {
    this._certificateAuthorityArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnsInput() {
    return this._certificateAuthorityArns;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
  /**
  * acm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmList",
    },
    file: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileList",
    },
    sds: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList",
    },
    trust: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#enforce AppmeshVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#ports AppmeshVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#validation AppmeshVirtualNode#validation}
  */
  readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    certificate: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    certificate: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateList",
    },
    validation: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._ports = undefined;
      this._certificate.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._ports = value.ports;
      this._certificate.internalValue = value.certificate;
      this._validation.internalValue = value.validation;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct!.tls),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls.internalValue = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaults {
  /**
  * client_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#client_policy AppmeshVirtualNode#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy;
}

export function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsOutputReference | AppmeshVirtualNodeSpecBackendDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_policy: appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct!.clientPolicy),
  }
}


export function appmeshVirtualNodeSpecBackendDefaultsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsOutputReference | AppmeshVirtualNodeSpecBackendDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_policy: {
      value: appmeshVirtualNodeSpecBackendDefaultsClientPolicyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsClientPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecBackendDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPolicy = this._clientPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecBackendDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientPolicy.internalValue = value.clientPolicy;
    }
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy) {
    this._clientPolicy.internalValue = value;
  }
  public resetClientPolicy() {
    this._clientPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPolicyInput() {
    return this._clientPolicy.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#max_requests AppmeshVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}


export function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRequests = value.maxRequests;
    }
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#max_connections AppmeshVirtualNode#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#max_pending_requests AppmeshVirtualNode#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}


export function appmeshVirtualNodeSpecListenerConnectionPoolHttpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
    }
  }

  // max_connections - computed: false, optional: false, required: true
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolHttpList extends cdktf.ComplexList {
  public internalValue? : AppmeshVirtualNodeSpecListenerConnectionPoolHttp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference {
    return new AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#max_requests AppmeshVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}


export function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRequests = value.maxRequests;
    }
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2List extends cdktf.ComplexList {
  public internalValue? : AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference {
    return new AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#max_connections AppmeshVirtualNode#max_connections}
  */
  readonly maxConnections: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
  }
}


export function appmeshVirtualNodeSpecListenerConnectionPoolTcpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
    }
  }

  // max_connections - computed: false, optional: false, required: true
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolTcpList extends cdktf.ComplexList {
  public internalValue? : AppmeshVirtualNodeSpecListenerConnectionPoolTcp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference {
    return new AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshVirtualNodeSpecListenerConnectionPool {
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#grpc AppmeshVirtualNode#grpc}
  */
  readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#http AppmeshVirtualNode#http}
  */
  readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[] | cdktf.IResolvable;
  /**
  * http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#http2 AppmeshVirtualNode#http2}
  */
  readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[] | cdktf.IResolvable;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#tcp AppmeshVirtualNode#tcp}
  */
  readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[] | cdktf.IResolvable;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference | AppmeshVirtualNodeSpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct!.grpc),
    http: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform, true)(struct!.http),
    http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform, true)(struct!.http2),
    tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform, true)(struct!.tcp),
  }
}


export function appmeshVirtualNodeSpecListenerConnectionPoolToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference | AppmeshVirtualNodeSpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: appmeshVirtualNodeSpecListenerConnectionPoolGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerConnectionPoolGrpcList",
    },
    http: {
      value: cdktf.listMapperHcl(appmeshVirtualNodeSpecListenerConnectionPoolHttpToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerConnectionPoolHttpList",
    },
    http2: {
      value: cdktf.listMapperHcl(appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToHclTerraform, true)(struct!.http2),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerConnectionPoolHttp2List",
    },
    tcp: {
      value: cdktf.listMapperHcl(appmeshVirtualNodeSpecListenerConnectionPoolTcpToHclTerraform, true)(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerConnectionPoolTcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._http2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._http2.internalValue = value.http2;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new AppmeshVirtualNodeSpecListenerConnectionPoolHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2 = new AppmeshVirtualNodeSpecListenerConnectionPoolHttp2List(this, "http2", false);
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[] | cdktf.IResolvable) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new AppmeshVirtualNodeSpecListenerConnectionPoolTcpList(this, "tcp", false);
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[] | cdktf.IResolvable) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#healthy_threshold AppmeshVirtualNode#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#interval_millis AppmeshVirtualNode#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#path AppmeshVirtualNode#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#port AppmeshVirtualNode#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#protocol AppmeshVirtualNode#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#timeout_millis AppmeshVirtualNode#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

export function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheckOutputReference | AppmeshVirtualNodeSpecListenerHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function appmeshVirtualNodeSpecListenerHealthCheckToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheckOutputReference | AppmeshVirtualNodeSpecListenerHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_millis: {
      value: cdktf.numberToHclTerraform(struct!.intervalMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_millis: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMillis = this._intervalMillis;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMillis = this._timeoutMillis;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthyThreshold = undefined;
      this._intervalMillis = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutMillis = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalMillis = value.intervalMillis;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutMillis = value.timeoutMillis;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval_millis - computed: false, optional: false, required: true
  private _intervalMillis?: number; 
  public get intervalMillis() {
    return this.getNumberAttribute('interval_millis');
  }
  public set intervalMillis(value: number) {
    this._intervalMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisInput() {
    return this._intervalMillis;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout_millis - computed: false, optional: false, required: true
  private _timeoutMillis?: number; 
  public get timeoutMillis() {
    return this.getNumberAttribute('timeout_millis');
  }
  public set timeoutMillis(value: number) {
    this._timeoutMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMillisInput() {
    return this._timeoutMillis;
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}
  */
  readonly maxEjectionPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#max_server_errors AppmeshVirtualNode#max_server_errors}
  */
  readonly maxServerErrors: number;
  /**
  * base_ejection_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
  */
  readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration;
  /**
  * interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#interval AppmeshVirtualNode#interval}
  */
  readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval;
}

export function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    max_server_errors: cdktf.numberToTerraform(struct!.maxServerErrors),
    base_ejection_duration: appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct!.baseEjectionDuration),
    interval: appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct!.interval),
  }
}


export function appmeshVirtualNodeSpecListenerOutlierDetectionToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_server_errors: {
      value: cdktf.numberToHclTerraform(struct!.maxServerErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    base_ejection_duration: {
      value: appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToHclTerraform(struct!.baseEjectionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationList",
    },
    interval: {
      value: appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToHclTerraform(struct!.interval),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._maxServerErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxServerErrors = this._maxServerErrors;
    }
    if (this._baseEjectionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionDuration = this._baseEjectionDuration?.internalValue;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxEjectionPercent = undefined;
      this._maxServerErrors = undefined;
      this._baseEjectionDuration.internalValue = undefined;
      this._interval.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._maxServerErrors = value.maxServerErrors;
      this._baseEjectionDuration.internalValue = value.baseEjectionDuration;
      this._interval.internalValue = value.interval;
    }
  }

  // max_ejection_percent - computed: false, optional: false, required: true
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // max_server_errors - computed: false, optional: false, required: true
  private _maxServerErrors?: number; 
  public get maxServerErrors() {
    return this.getNumberAttribute('max_server_errors');
  }
  public set maxServerErrors(value: number) {
    this._maxServerErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServerErrorsInput() {
    return this._maxServerErrors;
  }

  // base_ejection_duration - computed: false, optional: false, required: true
  private _baseEjectionDuration = new AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference(this, "base_ejection_duration");
  public get baseEjectionDuration() {
    return this._baseEjectionDuration;
  }
  public putBaseEjectionDuration(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration) {
    this._baseEjectionDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionDurationInput() {
    return this._baseEjectionDuration.internalValue;
  }

  // interval - computed: false, optional: false, required: true
  private _interval = new AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval) {
    this._interval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerPortMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#port AppmeshVirtualNode#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#protocol AppmeshVirtualNode#protocol}
  */
  readonly protocol: string;
}

export function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMappingOutputReference | AppmeshVirtualNodeSpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function appmeshVirtualNodeSpecListenerPortMappingToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMappingOutputReference | AppmeshVirtualNodeSpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerPortMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerPortMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest;
}

export function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct!.idle),
    per_request: appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct!.perRequest),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutGrpcToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleList",
    },
    per_request: {
      value: appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct!.idle),
    per_request: appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct!.perRequest),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutHttpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: appmeshVirtualNodeSpecListenerTimeoutHttpIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutHttpIdleList",
    },
    per_request: {
      value: appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct!.idle),
    per_request: appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct!.perRequest),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutHttp2ToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleList",
    },
    per_request: {
      value: appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle;
}

export function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct!.idle),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutTcpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: appmeshVirtualNodeSpecListenerTimeoutTcpIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutTcpIdleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeout {
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#grpc AppmeshVirtualNode#grpc}
  */
  readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#http AppmeshVirtualNode#http}
  */
  readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp;
  /**
  * http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#http2 AppmeshVirtualNode#http2}
  */
  readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#tcp AppmeshVirtualNode#tcp}
  */
  readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp;
}

export function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutOutputReference | AppmeshVirtualNodeSpecListenerTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct!.grpc),
    http: appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct!.http),
    http2: appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct!.http2),
    tcp: appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct!.tcp),
  }
}


export function appmeshVirtualNodeSpecListenerTimeoutToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutOutputReference | AppmeshVirtualNodeSpecListenerTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: appmeshVirtualNodeSpecListenerTimeoutGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutGrpcList",
    },
    http: {
      value: appmeshVirtualNodeSpecListenerTimeoutHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutHttpList",
    },
    http2: {
      value: appmeshVirtualNodeSpecListenerTimeoutHttp2ToHclTerraform(struct!.http2),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutHttp2List",
    },
    tcp: {
      value: appmeshVirtualNodeSpecListenerTimeoutTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutTcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._http2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._http2.internalValue = value.http2;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: AppmeshVirtualNodeSpecListenerTimeoutHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2 = new AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference(this, "http2");
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: AppmeshVirtualNodeSpecListenerTimeoutTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_arn AppmeshVirtualNode#certificate_arn}
  */
  readonly certificateArn: string;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}


export function appmeshVirtualNodeSpecListenerTlsCertificateAcmToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateArn = value.certificateArn;
    }
  }

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function appmeshVirtualNodeSpecListenerTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function appmeshVirtualNodeSpecListenerTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
  /**
  * acm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct!.acm),
    file: appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function appmeshVirtualNodeSpecListenerTlsCertificateToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: appmeshVirtualNodeSpecListenerTlsCertificateAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsCertificateAcmList",
    },
    file: {
      value: appmeshVirtualNodeSpecListenerTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsCertificateFileList",
    },
    sds: {
      value: appmeshVirtualNodeSpecListenerTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsCertificateSdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return cdktf.Fn.tolist(this.getListAttribute('exact'));
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds;
}

export function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function appmeshVirtualNodeSpecListenerTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: appmeshVirtualNodeSpecListenerTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsValidationTrustFileList",
    },
    sds: {
      value: appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsValidation {
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust;
}

export function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationOutputReference | AppmeshVirtualNodeSpecListenerTlsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function appmeshVirtualNodeSpecListenerTlsValidationToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationOutputReference | AppmeshVirtualNodeSpecListenerTlsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesList",
    },
    trust: {
      value: appmeshVirtualNodeSpecListenerTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsValidationTrustList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListenerTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#mode AppmeshVirtualNode#mode}
  */
  readonly mode: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#validation AppmeshVirtualNode#validation}
  */
  readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation;
}

export function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsOutputReference | AppmeshVirtualNodeSpecListenerTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    certificate: appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct!.validation),
  }
}


export function appmeshVirtualNodeSpecListenerTlsToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsOutputReference | AppmeshVirtualNodeSpecListenerTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: appmeshVirtualNodeSpecListenerTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsCertificateList",
    },
    validation: {
      value: appmeshVirtualNodeSpecListenerTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListenerTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListenerTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._certificate.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._certificate.internalValue = value.certificate;
      this._validation.internalValue = value.validation;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: AppmeshVirtualNodeSpecListenerTlsCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new AppmeshVirtualNodeSpecListenerTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: AppmeshVirtualNodeSpecListenerTlsValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecListener {
  /**
  * connection_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#connection_pool AppmeshVirtualNode#connection_pool}
  */
  readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#health_check AppmeshVirtualNode#health_check}
  */
  readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck;
  /**
  * outlier_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#outlier_detection AppmeshVirtualNode#outlier_detection}
  */
  readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection;
  /**
  * port_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#port_mapping AppmeshVirtualNode#port_mapping}
  */
  readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#timeout AppmeshVirtualNode#timeout}
  */
  readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecListenerTls;
}

export function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct!.connectionPool),
    health_check: appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct!.healthCheck),
    outlier_detection: appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct!.outlierDetection),
    port_mapping: appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct!.portMapping),
    timeout: appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct!.timeout),
    tls: appmeshVirtualNodeSpecListenerTlsToTerraform(struct!.tls),
  }
}


export function appmeshVirtualNodeSpecListenerToHclTerraform(struct?: AppmeshVirtualNodeSpecListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: appmeshVirtualNodeSpecListenerConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerConnectionPoolList",
    },
    health_check: {
      value: appmeshVirtualNodeSpecListenerHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerHealthCheckList",
    },
    outlier_detection: {
      value: appmeshVirtualNodeSpecListenerOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerOutlierDetectionList",
    },
    port_mapping: {
      value: appmeshVirtualNodeSpecListenerPortMappingToHclTerraform(struct!.portMapping),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerPortMappingList",
    },
    timeout: {
      value: appmeshVirtualNodeSpecListenerTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTimeoutList",
    },
    tls: {
      value: appmeshVirtualNodeSpecListenerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppmeshVirtualNodeSpecListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._portMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMapping = this._portMapping?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._portMapping.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._healthCheck.internalValue = value.healthCheck;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._portMapping.internalValue = value.portMapping;
      this._timeout.internalValue = value.timeout;
      this._tls.internalValue = value.tls;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: AppmeshVirtualNodeSpecListenerConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new AppmeshVirtualNodeSpecListenerHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: AppmeshVirtualNodeSpecListenerHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: AppmeshVirtualNodeSpecListenerOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping = new AppmeshVirtualNodeSpecListenerPortMappingOutputReference(this, "port_mapping");
  public get portMapping() {
    return this._portMapping;
  }
  public putPortMapping(value: AppmeshVirtualNodeSpecListenerPortMapping) {
    this._portMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AppmeshVirtualNodeSpecListenerTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AppmeshVirtualNodeSpecListenerTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new AppmeshVirtualNodeSpecListenerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppmeshVirtualNodeSpecListenerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class AppmeshVirtualNodeSpecListenerList extends cdktf.ComplexList {
  public internalValue? : AppmeshVirtualNodeSpecListener[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppmeshVirtualNodeSpecListenerOutputReference {
    return new AppmeshVirtualNodeSpecListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#key AppmeshVirtualNode#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
  */
  readonly value: string;
}

export function appmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonList extends cdktf.ComplexList {
  public internalValue? : AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonOutputReference {
    return new AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFileFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#text AppmeshVirtualNode#text}
  */
  readonly text?: string;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#json AppmeshVirtualNode#json}
  */
  readonly json?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable;
}

export function appmeshVirtualNodeSpecLoggingAccessLogFileFormatToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    json: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToTerraform, true)(struct!.json),
  }
}


export function appmeshVirtualNodeSpecLoggingAccessLogFileFormatToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.listMapperHcl(appmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToHclTerraform, true)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLogFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
      this._json.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
      this._json.internalValue = value.json;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // json - computed: false, optional: true, required: false
  private _json = new AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#path AppmeshVirtualNode#path}
  */
  readonly path: string;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#format AppmeshVirtualNode#format}
  */
  readonly format?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormat;
}

export function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    format: appmeshVirtualNodeSpecLoggingAccessLogFileFormatToTerraform(struct!.format),
  }
}


export function appmeshVirtualNodeSpecLoggingAccessLogFileToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: appmeshVirtualNodeSpecLoggingAccessLogFileFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecLoggingAccessLogFileFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._format.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._format.internalValue = value.format;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // format - computed: false, optional: true, required: false
  private _format = new AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecLoggingAccessLog {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile;
}

export function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogOutputReference | AppmeshVirtualNodeSpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct!.file),
  }
}


export function appmeshVirtualNodeSpecLoggingAccessLogToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogOutputReference | AppmeshVirtualNodeSpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: appmeshVirtualNodeSpecLoggingAccessLogFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecLoggingAccessLogFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: AppmeshVirtualNodeSpecLoggingAccessLogFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecLogging {
  /**
  * access_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#access_log AppmeshVirtualNode#access_log}
  */
  readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog;
}

export function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLoggingOutputReference | AppmeshVirtualNodeSpecLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct!.accessLog),
  }
}


export function appmeshVirtualNodeSpecLoggingToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingOutputReference | AppmeshVirtualNodeSpecLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: appmeshVirtualNodeSpecLoggingAccessLogToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecLoggingAccessLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLog.internalValue = value.accessLog;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new AppmeshVirtualNodeSpecLoggingAccessLogOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: AppmeshVirtualNodeSpecLoggingAccessLog) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#attributes AppmeshVirtualNode#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#namespace_name AppmeshVirtualNode#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#service_name AppmeshVirtualNode#service_name}
  */
  readonly serviceName: string;
}

export function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToHclTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._namespaceName = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._namespaceName = value.namespaceName;
      this._serviceName = value.serviceName;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#hostname AppmeshVirtualNode#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#ip_preference AppmeshVirtualNode#ip_preference}
  */
  readonly ipPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#response_type AppmeshVirtualNode#response_type}
  */
  readonly responseType?: string;
}

export function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_preference: cdktf.stringToTerraform(struct!.ipPreference),
    response_type: cdktf.stringToTerraform(struct!.responseType),
  }
}


export function appmeshVirtualNodeSpecServiceDiscoveryDnsToHclTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_preference: {
      value: cdktf.stringToHclTerraform(struct!.ipPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktf.stringToHclTerraform(struct!.responseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPreference = this._ipPreference;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._ipPreference = undefined;
      this._responseType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._ipPreference = value.ipPreference;
      this._responseType = value.responseType;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_preference - computed: false, optional: true, required: false
  private _ipPreference?: string; 
  public get ipPreference() {
    return this.getStringAttribute('ip_preference');
  }
  public set ipPreference(value: string) {
    this._ipPreference = value;
  }
  public resetIpPreference() {
    this._ipPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPreferenceInput() {
    return this._ipPreference;
  }

  // response_type - computed: false, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
  /**
  * aws_cloud_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
  */
  readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#dns AppmeshVirtualNode#dns}
  */
  readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns;
}

export function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryOutputReference | AppmeshVirtualNodeSpecServiceDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cloud_map: appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct!.awsCloudMap),
    dns: appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct!.dns),
  }
}


export function appmeshVirtualNodeSpecServiceDiscoveryToHclTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryOutputReference | AppmeshVirtualNodeSpecServiceDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_cloud_map: {
      value: appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToHclTerraform(struct!.awsCloudMap),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapList",
    },
    dns: {
      value: appmeshVirtualNodeSpecServiceDiscoveryDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecServiceDiscoveryDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpecServiceDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCloudMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCloudMap = this._awsCloudMap?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpecServiceDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCloudMap.internalValue = undefined;
      this._dns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCloudMap.internalValue = value.awsCloudMap;
      this._dns.internalValue = value.dns;
    }
  }

  // aws_cloud_map - computed: false, optional: true, required: false
  private _awsCloudMap = new AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference(this, "aws_cloud_map");
  public get awsCloudMap() {
    return this._awsCloudMap;
  }
  public putAwsCloudMap(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap) {
    this._awsCloudMap.internalValue = value;
  }
  public resetAwsCloudMap() {
    this._awsCloudMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudMapInput() {
    return this._awsCloudMap.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: AppmeshVirtualNodeSpecServiceDiscoveryDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}
export interface AppmeshVirtualNodeSpec {
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#backend AppmeshVirtualNode#backend}
  */
  readonly backend?: AppmeshVirtualNodeSpecBackend[] | cdktf.IResolvable;
  /**
  * backend_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#backend_defaults AppmeshVirtualNode#backend_defaults}
  */
  readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults;
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#listener AppmeshVirtualNode#listener}
  */
  readonly listener?: AppmeshVirtualNodeSpecListener[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#logging AppmeshVirtualNode#logging}
  */
  readonly logging?: AppmeshVirtualNodeSpecLogging;
  /**
  * service_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#service_discovery AppmeshVirtualNode#service_discovery}
  */
  readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery;
}

export function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpecOutputReference | AppmeshVirtualNodeSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform, true)(struct!.backend),
    backend_defaults: appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct!.backendDefaults),
    listener: cdktf.listMapper(appmeshVirtualNodeSpecListenerToTerraform, true)(struct!.listener),
    logging: appmeshVirtualNodeSpecLoggingToTerraform(struct!.logging),
    service_discovery: appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct!.serviceDiscovery),
  }
}


export function appmeshVirtualNodeSpecToHclTerraform(struct?: AppmeshVirtualNodeSpecOutputReference | AppmeshVirtualNodeSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: cdktf.listMapperHcl(appmeshVirtualNodeSpecBackendToHclTerraform, true)(struct!.backend),
      isBlock: true,
      type: "set",
      storageClassType: "AppmeshVirtualNodeSpecBackendList",
    },
    backend_defaults: {
      value: appmeshVirtualNodeSpecBackendDefaultsToHclTerraform(struct!.backendDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecBackendDefaultsList",
    },
    listener: {
      value: cdktf.listMapperHcl(appmeshVirtualNodeSpecListenerToHclTerraform, true)(struct!.listener),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecListenerList",
    },
    logging: {
      value: appmeshVirtualNodeSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecLoggingList",
    },
    service_discovery: {
      value: appmeshVirtualNodeSpecServiceDiscoveryToHclTerraform(struct!.serviceDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualNodeSpecServiceDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualNodeSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualNodeSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._backendDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDefaults = this._backendDefaults?.internalValue;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._serviceDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscovery = this._serviceDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualNodeSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backend.internalValue = undefined;
      this._backendDefaults.internalValue = undefined;
      this._listener.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._serviceDiscovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backend.internalValue = value.backend;
      this._backendDefaults.internalValue = value.backendDefaults;
      this._listener.internalValue = value.listener;
      this._logging.internalValue = value.logging;
      this._serviceDiscovery.internalValue = value.serviceDiscovery;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new AppmeshVirtualNodeSpecBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: AppmeshVirtualNodeSpecBackend[] | cdktf.IResolvable) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // backend_defaults - computed: false, optional: true, required: false
  private _backendDefaults = new AppmeshVirtualNodeSpecBackendDefaultsOutputReference(this, "backend_defaults");
  public get backendDefaults() {
    return this._backendDefaults;
  }
  public putBackendDefaults(value: AppmeshVirtualNodeSpecBackendDefaults) {
    this._backendDefaults.internalValue = value;
  }
  public resetBackendDefaults() {
    this._backendDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDefaultsInput() {
    return this._backendDefaults.internalValue;
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new AppmeshVirtualNodeSpecListenerList(this, "listener", false);
  public get listener() {
    return this._listener;
  }
  public putListener(value: AppmeshVirtualNodeSpecListener[] | cdktf.IResolvable) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new AppmeshVirtualNodeSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: AppmeshVirtualNodeSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new AppmeshVirtualNodeSpecServiceDiscoveryOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: AppmeshVirtualNodeSpecServiceDiscovery) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node aws_appmesh_virtual_node}
*/
export class AppmeshVirtualNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_virtual_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppmeshVirtualNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppmeshVirtualNode to import
  * @param importFromId The id of the existing AppmeshVirtualNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppmeshVirtualNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_virtual_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_node aws_appmesh_virtual_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualNodeConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_node',
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
    this._id = config.id;
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
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

  // spec - computed: false, optional: false, required: true
  private _spec = new AppmeshVirtualNodeSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppmeshVirtualNodeSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      spec: appmeshVirtualNodeSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_name: {
        value: cdktf.stringToHclTerraform(this._meshName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_owner: {
        value: cdktf.stringToHclTerraform(this._meshOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      spec: {
        value: appmeshVirtualNodeSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppmeshVirtualNodeSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
