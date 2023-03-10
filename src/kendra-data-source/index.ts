// https://www.terraform.io/docs/providers/aws/r/kendra_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KendraDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#description KendraDataSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#id KendraDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#index_id KendraDataSource#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#language_code KendraDataSource#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#name KendraDataSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#schedule KendraDataSource#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags KendraDataSource#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags_all KendraDataSource#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#type KendraDataSource#type}
  */
  readonly type: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#configuration KendraDataSource#configuration}
  */
  readonly configuration?: KendraDataSourceConfiguration;
  /**
  * custom_document_enrichment_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#custom_document_enrichment_configuration KendraDataSource#custom_document_enrichment_configuration}
  */
  readonly customDocumentEnrichmentConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#timeouts KendraDataSource#timeouts}
  */
  readonly timeouts?: KendraDataSourceTimeouts;
}
export interface KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#key_path KendraDataSource#key_path}
  */
  readonly keyPath?: string;
}

export function kendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference | KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
  }
}

export class KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPath = value.keyPath;
    }
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }
}
export interface KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}
  */
  readonly s3Prefix?: string;
}

export function kendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference | KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_prefix: cdktf.stringToTerraform(struct!.s3Prefix),
  }
}

export class KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Prefix = value.s3Prefix;
    }
  }

  // s3_prefix - computed: false, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }
}
export interface KendraDataSourceConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#bucket_name KendraDataSource#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
  /**
  * access_control_list_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#access_control_list_configuration KendraDataSource#access_control_list_configuration}
  */
  readonly accessControlListConfiguration?: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration;
  /**
  * documents_metadata_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#documents_metadata_configuration KendraDataSource#documents_metadata_configuration}
  */
  readonly documentsMetadataConfiguration?: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration;
}

export function kendraDataSourceConfigurationS3ConfigurationToTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationOutputReference | KendraDataSourceConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionPatterns),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionPatterns),
    inclusion_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionPrefixes),
    access_control_list_configuration: kendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct!.accessControlListConfiguration),
    documents_metadata_configuration: kendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct!.documentsMetadataConfiguration),
  }
}

export class KendraDataSourceConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    if (this._accessControlListConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlListConfiguration = this._accessControlListConfiguration?.internalValue;
    }
    if (this._documentsMetadataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentsMetadataConfiguration = this._documentsMetadataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._exclusionPatterns = undefined;
      this._inclusionPatterns = undefined;
      this._inclusionPrefixes = undefined;
      this._accessControlListConfiguration.internalValue = undefined;
      this._documentsMetadataConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._exclusionPatterns = value.exclusionPatterns;
      this._inclusionPatterns = value.inclusionPatterns;
      this._inclusionPrefixes = value.inclusionPrefixes;
      this._accessControlListConfiguration.internalValue = value.accessControlListConfiguration;
      this._documentsMetadataConfiguration.internalValue = value.documentsMetadataConfiguration;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // exclusion_patterns - computed: false, optional: true, required: false
  private _exclusionPatterns?: string[]; 
  public get exclusionPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusion_patterns'));
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // inclusion_patterns - computed: false, optional: true, required: false
  private _inclusionPatterns?: string[]; 
  public get inclusionPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_patterns'));
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // inclusion_prefixes - computed: false, optional: true, required: false
  private _inclusionPrefixes?: string[]; 
  public get inclusionPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_prefixes'));
  }
  public set inclusionPrefixes(value: string[]) {
    this._inclusionPrefixes = value;
  }
  public resetInclusionPrefixes() {
    this._inclusionPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPrefixesInput() {
    return this._inclusionPrefixes;
  }

  // access_control_list_configuration - computed: false, optional: true, required: false
  private _accessControlListConfiguration = new KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference(this, "access_control_list_configuration");
  public get accessControlListConfiguration() {
    return this._accessControlListConfiguration;
  }
  public putAccessControlListConfiguration(value: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration) {
    this._accessControlListConfiguration.internalValue = value;
  }
  public resetAccessControlListConfiguration() {
    this._accessControlListConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListConfigurationInput() {
    return this._accessControlListConfiguration.internalValue;
  }

  // documents_metadata_configuration - computed: false, optional: true, required: false
  private _documentsMetadataConfiguration = new KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference(this, "documents_metadata_configuration");
  public get documentsMetadataConfiguration() {
    return this._documentsMetadataConfiguration;
  }
  public putDocumentsMetadataConfiguration(value: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration) {
    this._documentsMetadataConfiguration.internalValue = value;
  }
  public resetDocumentsMetadataConfiguration() {
    this._documentsMetadataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentsMetadataConfigurationInput() {
    return this._documentsMetadataConfiguration.internalValue;
  }
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}
  */
  readonly credentials: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}
  */
  readonly port: number;
}

export function kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList extends cdktf.ComplexList {
  public internalValue? : KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktf.IResolvable

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
  public get(index: number): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference {
    return new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration {
  /**
  * basic_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#basic_authentication KendraDataSource#basic_authentication}
  */
  readonly basicAuthentication?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktf.IResolvable;
}

export function kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_authentication: cdktf.listMapper(kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToTerraform, true)(struct!.basicAuthentication),
  }
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthentication = this._basicAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthentication.internalValue = value.basicAuthentication;
    }
  }

  // basic_authentication - computed: false, optional: true, required: false
  private _basicAuthentication = new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList(this, "basic_authentication", true);
  public get basicAuthentication() {
    return this._basicAuthentication;
  }
  public putBasicAuthentication(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktf.IResolvable) {
    this._basicAuthentication.internalValue = value;
  }
  public resetBasicAuthentication() {
    this._basicAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationInput() {
    return this._basicAuthentication.internalValue;
  }
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}
  */
  readonly port: number;
}

export function kendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials = value.credentials;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_urls KendraDataSource#seed_urls}
  */
  readonly seedUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}
  */
  readonly webCrawlerMode?: string;
}

export function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seedUrls),
    web_crawler_mode: cdktf.stringToTerraform(struct!.webCrawlerMode),
  }
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrls = this._seedUrls;
    }
    if (this._webCrawlerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerMode = this._webCrawlerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._seedUrls = undefined;
      this._webCrawlerMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._seedUrls = value.seedUrls;
      this._webCrawlerMode = value.webCrawlerMode;
    }
  }

  // seed_urls - computed: false, optional: false, required: true
  private _seedUrls?: string[]; 
  public get seedUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('seed_urls'));
  }
  public set seedUrls(value: string[]) {
    this._seedUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlsInput() {
    return this._seedUrls;
  }

  // web_crawler_mode - computed: false, optional: true, required: false
  private _webCrawlerMode?: string; 
  public get webCrawlerMode() {
    return this.getStringAttribute('web_crawler_mode');
  }
  public set webCrawlerMode(value: string) {
    this._webCrawlerMode = value;
  }
  public resetWebCrawlerMode() {
    this._webCrawlerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerModeInput() {
    return this._webCrawlerMode;
  }
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps KendraDataSource#site_maps}
  */
  readonly siteMaps: string[];
}

export function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteMaps),
  }
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteMaps = this._siteMaps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteMaps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteMaps = value.siteMaps;
    }
  }

  // site_maps - computed: false, optional: false, required: true
  private _siteMaps?: string[]; 
  public get siteMaps() {
    return cdktf.Fn.tolist(this.getListAttribute('site_maps'));
  }
  public set siteMaps(value: string[]) {
    this._siteMaps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteMapsInput() {
    return this._siteMaps;
  }
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationUrls {
  /**
  * seed_url_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_url_configuration KendraDataSource#seed_url_configuration}
  */
  readonly seedUrlConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration;
  /**
  * site_maps_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps_configuration KendraDataSource#site_maps_configuration}
  */
  readonly siteMapsConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration;
}

export function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed_url_configuration: kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToTerraform(struct!.seedUrlConfiguration),
    site_maps_configuration: kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToTerraform(struct!.siteMapsConfiguration),
  }
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrlConfiguration = this._seedUrlConfiguration?.internalValue;
    }
    if (this._siteMapsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteMapsConfiguration = this._siteMapsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._seedUrlConfiguration.internalValue = undefined;
      this._siteMapsConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._seedUrlConfiguration.internalValue = value.seedUrlConfiguration;
      this._siteMapsConfiguration.internalValue = value.siteMapsConfiguration;
    }
  }

  // seed_url_configuration - computed: false, optional: true, required: false
  private _seedUrlConfiguration = new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference(this, "seed_url_configuration");
  public get seedUrlConfiguration() {
    return this._seedUrlConfiguration;
  }
  public putSeedUrlConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration) {
    this._seedUrlConfiguration.internalValue = value;
  }
  public resetSeedUrlConfiguration() {
    this._seedUrlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlConfigurationInput() {
    return this._seedUrlConfiguration.internalValue;
  }

  // site_maps_configuration - computed: false, optional: true, required: false
  private _siteMapsConfiguration = new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference(this, "site_maps_configuration");
  public get siteMapsConfiguration() {
    return this._siteMapsConfiguration;
  }
  public putSiteMapsConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration) {
    this._siteMapsConfiguration.internalValue = value;
  }
  public resetSiteMapsConfiguration() {
    this._siteMapsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteMapsConfigurationInput() {
    return this._siteMapsConfiguration.internalValue;
  }
}
export interface KendraDataSourceConfigurationWebCrawlerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}
  */
  readonly crawlDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}
  */
  readonly maxContentSizePerPageInMegaBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}
  */
  readonly maxLinksPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}
  */
  readonly maxUrlsPerMinuteCrawlRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}
  */
  readonly urlExclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}
  */
  readonly urlInclusionPatterns?: string[];
  /**
  * authentication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#authentication_configuration KendraDataSource#authentication_configuration}
  */
  readonly authenticationConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration;
  /**
  * proxy_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#proxy_configuration KendraDataSource#proxy_configuration}
  */
  readonly proxyConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration;
  /**
  * urls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#urls KendraDataSource#urls}
  */
  readonly urls: KendraDataSourceConfigurationWebCrawlerConfigurationUrls;
}

export function kendraDataSourceConfigurationWebCrawlerConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawl_depth: cdktf.numberToTerraform(struct!.crawlDepth),
    max_content_size_per_page_in_mega_bytes: cdktf.numberToTerraform(struct!.maxContentSizePerPageInMegaBytes),
    max_links_per_page: cdktf.numberToTerraform(struct!.maxLinksPerPage),
    max_urls_per_minute_crawl_rate: cdktf.numberToTerraform(struct!.maxUrlsPerMinuteCrawlRate),
    url_exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlExclusionPatterns),
    url_inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlInclusionPatterns),
    authentication_configuration: kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToTerraform(struct!.authenticationConfiguration),
    proxy_configuration: kendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToTerraform(struct!.proxyConfiguration),
    urls: kendraDataSourceConfigurationWebCrawlerConfigurationUrlsToTerraform(struct!.urls),
  }
}

export class KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfigurationWebCrawlerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlDepth = this._crawlDepth;
    }
    if (this._maxContentSizePerPageInMegaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContentSizePerPageInMegaBytes = this._maxContentSizePerPageInMegaBytes;
    }
    if (this._maxLinksPerPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLinksPerPage = this._maxLinksPerPage;
    }
    if (this._maxUrlsPerMinuteCrawlRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlsPerMinuteCrawlRate = this._maxUrlsPerMinuteCrawlRate;
    }
    if (this._urlExclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlExclusionPatterns = this._urlExclusionPatterns;
    }
    if (this._urlInclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInclusionPatterns = this._urlInclusionPatterns;
    }
    if (this._authenticationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
    }
    if (this._proxyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfiguration = this._proxyConfiguration?.internalValue;
    }
    if (this._urls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crawlDepth = undefined;
      this._maxContentSizePerPageInMegaBytes = undefined;
      this._maxLinksPerPage = undefined;
      this._maxUrlsPerMinuteCrawlRate = undefined;
      this._urlExclusionPatterns = undefined;
      this._urlInclusionPatterns = undefined;
      this._authenticationConfiguration.internalValue = undefined;
      this._proxyConfiguration.internalValue = undefined;
      this._urls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crawlDepth = value.crawlDepth;
      this._maxContentSizePerPageInMegaBytes = value.maxContentSizePerPageInMegaBytes;
      this._maxLinksPerPage = value.maxLinksPerPage;
      this._maxUrlsPerMinuteCrawlRate = value.maxUrlsPerMinuteCrawlRate;
      this._urlExclusionPatterns = value.urlExclusionPatterns;
      this._urlInclusionPatterns = value.urlInclusionPatterns;
      this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
      this._proxyConfiguration.internalValue = value.proxyConfiguration;
      this._urls.internalValue = value.urls;
    }
  }

  // crawl_depth - computed: false, optional: true, required: false
  private _crawlDepth?: number; 
  public get crawlDepth() {
    return this.getNumberAttribute('crawl_depth');
  }
  public set crawlDepth(value: number) {
    this._crawlDepth = value;
  }
  public resetCrawlDepth() {
    this._crawlDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlDepthInput() {
    return this._crawlDepth;
  }

  // max_content_size_per_page_in_mega_bytes - computed: false, optional: true, required: false
  private _maxContentSizePerPageInMegaBytes?: number; 
  public get maxContentSizePerPageInMegaBytes() {
    return this.getNumberAttribute('max_content_size_per_page_in_mega_bytes');
  }
  public set maxContentSizePerPageInMegaBytes(value: number) {
    this._maxContentSizePerPageInMegaBytes = value;
  }
  public resetMaxContentSizePerPageInMegaBytes() {
    this._maxContentSizePerPageInMegaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContentSizePerPageInMegaBytesInput() {
    return this._maxContentSizePerPageInMegaBytes;
  }

  // max_links_per_page - computed: false, optional: true, required: false
  private _maxLinksPerPage?: number; 
  public get maxLinksPerPage() {
    return this.getNumberAttribute('max_links_per_page');
  }
  public set maxLinksPerPage(value: number) {
    this._maxLinksPerPage = value;
  }
  public resetMaxLinksPerPage() {
    this._maxLinksPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinksPerPageInput() {
    return this._maxLinksPerPage;
  }

  // max_urls_per_minute_crawl_rate - computed: false, optional: true, required: false
  private _maxUrlsPerMinuteCrawlRate?: number; 
  public get maxUrlsPerMinuteCrawlRate() {
    return this.getNumberAttribute('max_urls_per_minute_crawl_rate');
  }
  public set maxUrlsPerMinuteCrawlRate(value: number) {
    this._maxUrlsPerMinuteCrawlRate = value;
  }
  public resetMaxUrlsPerMinuteCrawlRate() {
    this._maxUrlsPerMinuteCrawlRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlsPerMinuteCrawlRateInput() {
    return this._maxUrlsPerMinuteCrawlRate;
  }

  // url_exclusion_patterns - computed: false, optional: true, required: false
  private _urlExclusionPatterns?: string[]; 
  public get urlExclusionPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('url_exclusion_patterns'));
  }
  public set urlExclusionPatterns(value: string[]) {
    this._urlExclusionPatterns = value;
  }
  public resetUrlExclusionPatterns() {
    this._urlExclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlExclusionPatternsInput() {
    return this._urlExclusionPatterns;
  }

  // url_inclusion_patterns - computed: false, optional: true, required: false
  private _urlInclusionPatterns?: string[]; 
  public get urlInclusionPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('url_inclusion_patterns'));
  }
  public set urlInclusionPatterns(value: string[]) {
    this._urlInclusionPatterns = value;
  }
  public resetUrlInclusionPatterns() {
    this._urlInclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInclusionPatternsInput() {
    return this._urlInclusionPatterns;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration = new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference(this, "proxy_configuration");
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // urls - computed: false, optional: false, required: true
  private _urls = new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference(this, "urls");
  public get urls() {
    return this._urls;
  }
  public putUrls(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrls) {
    this._urls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls.internalValue;
  }
}
export interface KendraDataSourceConfiguration {
  /**
  * s3_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_configuration KendraDataSource#s3_configuration}
  */
  readonly s3Configuration?: KendraDataSourceConfigurationS3Configuration;
  /**
  * web_crawler_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_configuration KendraDataSource#web_crawler_configuration}
  */
  readonly webCrawlerConfiguration?: KendraDataSourceConfigurationWebCrawlerConfiguration;
}

export function kendraDataSourceConfigurationToTerraform(struct?: KendraDataSourceConfigurationOutputReference | KendraDataSourceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_configuration: kendraDataSourceConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    web_crawler_configuration: kendraDataSourceConfigurationWebCrawlerConfigurationToTerraform(struct!.webCrawlerConfiguration),
  }
}

export class KendraDataSourceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._webCrawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerConfiguration = this._webCrawlerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Configuration.internalValue = undefined;
      this._webCrawlerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._webCrawlerConfiguration.internalValue = value.webCrawlerConfiguration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new KendraDataSourceConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: KendraDataSourceConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // web_crawler_configuration - computed: false, optional: true, required: false
  private _webCrawlerConfiguration = new KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference(this, "web_crawler_configuration");
  public get webCrawlerConfiguration() {
    return this._webCrawlerConfiguration;
  }
  public putWebCrawlerConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfiguration) {
    this._webCrawlerConfiguration.internalValue = value;
  }
  public resetWebCrawlerConfiguration() {
    this._webCrawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerConfigurationInput() {
    return this._webCrawlerConfiguration.internalValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_value: cdktf.stringToTerraform(struct!.dateValue),
    long_value: cdktf.numberToTerraform(struct!.longValue),
    string_list_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktf.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}
  */
  readonly operator: string;
  /**
  * condition_on_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
  */
  readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_document_attribute_key: cdktf.stringToTerraform(struct!.conditionDocumentAttributeKey),
    operator: cdktf.stringToTerraform(struct!.operator),
    condition_on_value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToTerraform(struct!.conditionOnValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionDocumentAttributeKey = undefined;
      this._operator = undefined;
      this._conditionOnValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._operator = value.operator;
      this._conditionOnValue.internalValue = value.conditionOnValue;
    }
  }

  // condition_document_attribute_key - computed: false, optional: false, required: true
  private _conditionDocumentAttributeKey?: string; 
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // condition_on_value - computed: false, optional: true, required: false
  private _conditionOnValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_value: cdktf.stringToTerraform(struct!.dateValue),
    long_value: cdktf.numberToTerraform(struct!.longValue),
    string_list_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktf.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}
  */
  readonly targetDocumentAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}
  */
  readonly targetDocumentAttributeValueDeletion?: boolean | cdktf.IResolvable;
  /**
  * target_document_attribute_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value KendraDataSource#target_document_attribute_value}
  */
  readonly targetDocumentAttributeValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_document_attribute_key: cdktf.stringToTerraform(struct!.targetDocumentAttributeKey),
    target_document_attribute_value_deletion: cdktf.booleanToTerraform(struct!.targetDocumentAttributeValueDeletion),
    target_document_attribute_value: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToTerraform(struct!.targetDocumentAttributeValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeKey = this._targetDocumentAttributeKey;
    }
    if (this._targetDocumentAttributeValueDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeValueDeletion = this._targetDocumentAttributeValueDeletion;
    }
    if (this._targetDocumentAttributeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDocumentAttributeValue = this._targetDocumentAttributeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetDocumentAttributeKey = undefined;
      this._targetDocumentAttributeValueDeletion = undefined;
      this._targetDocumentAttributeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetDocumentAttributeKey = value.targetDocumentAttributeKey;
      this._targetDocumentAttributeValueDeletion = value.targetDocumentAttributeValueDeletion;
      this._targetDocumentAttributeValue.internalValue = value.targetDocumentAttributeValue;
    }
  }

  // target_document_attribute_key - computed: false, optional: true, required: false
  private _targetDocumentAttributeKey?: string; 
  public get targetDocumentAttributeKey() {
    return this.getStringAttribute('target_document_attribute_key');
  }
  public set targetDocumentAttributeKey(value: string) {
    this._targetDocumentAttributeKey = value;
  }
  public resetTargetDocumentAttributeKey() {
    this._targetDocumentAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeKeyInput() {
    return this._targetDocumentAttributeKey;
  }

  // target_document_attribute_value_deletion - computed: false, optional: true, required: false
  private _targetDocumentAttributeValueDeletion?: boolean | cdktf.IResolvable; 
  public get targetDocumentAttributeValueDeletion() {
    return this.getBooleanAttribute('target_document_attribute_value_deletion');
  }
  public set targetDocumentAttributeValueDeletion(value: boolean | cdktf.IResolvable) {
    this._targetDocumentAttributeValueDeletion = value;
  }
  public resetTargetDocumentAttributeValueDeletion() {
    this._targetDocumentAttributeValueDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeValueDeletionInput() {
    return this._targetDocumentAttributeValueDeletion;
  }

  // target_document_attribute_value - computed: false, optional: true, required: false
  private _targetDocumentAttributeValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference(this, "target_document_attribute_value");
  public get targetDocumentAttributeValue() {
    return this._targetDocumentAttributeValue;
  }
  public putTargetDocumentAttributeValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue) {
    this._targetDocumentAttributeValue.internalValue = value;
  }
  public resetTargetDocumentAttributeValue() {
    this._targetDocumentAttributeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDocumentAttributeValueInput() {
    return this._targetDocumentAttributeValue.internalValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#document_content_deletion KendraDataSource#document_content_deletion}
  */
  readonly documentContentDeletion?: boolean | cdktf.IResolvable;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition KendraDataSource#condition}
  */
  readonly condition?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target KendraDataSource#target}
  */
  readonly target?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_content_deletion: cdktf.booleanToTerraform(struct!.documentContentDeletion),
    condition: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct!.condition),
    target: kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct!.target),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentContentDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentContentDeletion = this._documentContentDeletion;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentContentDeletion = undefined;
      this._condition.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentContentDeletion = value.documentContentDeletion;
      this._condition.internalValue = value.condition;
      this._target.internalValue = value.target;
    }
  }

  // document_content_deletion - computed: false, optional: true, required: false
  private _documentContentDeletion?: boolean | cdktf.IResolvable; 
  public get documentContentDeletion() {
    return this.getBooleanAttribute('document_content_deletion');
  }
  public set documentContentDeletion(value: boolean | cdktf.IResolvable) {
    this._documentContentDeletion = value;
  }
  public resetDocumentContentDeletion() {
    this._documentContentDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentContentDeletionInput() {
    return this._documentContentDeletion;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList extends cdktf.ComplexList {
  public internalValue? : KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktf.IResolvable

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
  public get(index: number): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference {
    return new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_value: cdktf.stringToTerraform(struct!.dateValue),
    long_value: cdktf.numberToTerraform(struct!.longValue),
    string_list_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktf.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}
  */
  readonly operator: string;
  /**
  * condition_on_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
  */
  readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_document_attribute_key: cdktf.stringToTerraform(struct!.conditionDocumentAttributeKey),
    operator: cdktf.stringToTerraform(struct!.operator),
    condition_on_value: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct!.conditionOnValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionDocumentAttributeKey = undefined;
      this._operator = undefined;
      this._conditionOnValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._operator = value.operator;
      this._conditionOnValue.internalValue = value.conditionOnValue;
    }
  }

  // condition_document_attribute_key - computed: false, optional: false, required: true
  private _conditionDocumentAttributeKey?: string; 
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // condition_on_value - computed: false, optional: true, required: false
  private _conditionOnValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * invocation_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}
  */
  readonly invocationCondition?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    invocation_condition: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct!.invocationCondition),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._invocationCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._s3Bucket = undefined;
      this._invocationCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._s3Bucket = value.s3Bucket;
      this._invocationCondition.internalValue = value.invocationCondition;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // invocation_condition - computed: false, optional: true, required: false
  private _invocationCondition = new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition) {
    this._invocationCondition.internalValue = value;
  }
  public resetInvocationCondition() {
    this._invocationCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConditionInput() {
    return this._invocationCondition.internalValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}
  */
  readonly dateValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}
  */
  readonly longValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}
  */
  readonly stringListValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}
  */
  readonly stringValue?: string;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_value: cdktf.stringToTerraform(struct!.dateValue),
    long_value: cdktf.numberToTerraform(struct!.longValue),
    string_list_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringListValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue;
    }
    if (this._longValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longValue = this._longValue;
    }
    if (this._stringListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateValue = undefined;
      this._longValue = undefined;
      this._stringListValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateValue = value.dateValue;
      this._longValue = value.longValue;
      this._stringListValue = value.stringListValue;
      this._stringValue = value.stringValue;
    }
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue?: string; 
  public get dateValue() {
    return this.getStringAttribute('date_value');
  }
  public set dateValue(value: string) {
    this._dateValue = value;
  }
  public resetDateValue() {
    this._dateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue;
  }

  // long_value - computed: false, optional: true, required: false
  private _longValue?: number; 
  public get longValue() {
    return this.getNumberAttribute('long_value');
  }
  public set longValue(value: number) {
    this._longValue = value;
  }
  public resetLongValue() {
    this._longValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longValueInput() {
    return this._longValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue?: string[]; 
  public get stringListValue() {
    return cdktf.Fn.tolist(this.getListAttribute('string_list_value'));
  }
  public set stringListValue(value: string[]) {
    this._stringListValue = value;
  }
  public resetStringListValue() {
    this._stringListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
  */
  readonly conditionDocumentAttributeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}
  */
  readonly operator: string;
  /**
  * condition_on_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
  */
  readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_document_attribute_key: cdktf.stringToTerraform(struct!.conditionDocumentAttributeKey),
    operator: cdktf.stringToTerraform(struct!.operator),
    condition_on_value: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct!.conditionOnValue),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionDocumentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionDocumentAttributeKey = this._conditionDocumentAttributeKey;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditionOnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOnValue = this._conditionOnValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionDocumentAttributeKey = undefined;
      this._operator = undefined;
      this._conditionOnValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionDocumentAttributeKey = value.conditionDocumentAttributeKey;
      this._operator = value.operator;
      this._conditionOnValue.internalValue = value.conditionOnValue;
    }
  }

  // condition_document_attribute_key - computed: false, optional: false, required: true
  private _conditionDocumentAttributeKey?: string; 
  public get conditionDocumentAttributeKey() {
    return this.getStringAttribute('condition_document_attribute_key');
  }
  public set conditionDocumentAttributeKey(value: string) {
    this._conditionDocumentAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDocumentAttributeKeyInput() {
    return this._conditionDocumentAttributeKey;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // condition_on_value - computed: false, optional: true, required: false
  private _conditionOnValue = new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(this, "condition_on_value");
  public get conditionOnValue() {
    return this._conditionOnValue;
  }
  public putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue) {
    this._conditionOnValue.internalValue = value;
  }
  public resetConditionOnValue() {
    this._conditionOnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOnValueInput() {
    return this._conditionOnValue.internalValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * invocation_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}
  */
  readonly invocationCondition?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    invocation_condition: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct!.invocationCondition),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._invocationCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._s3Bucket = undefined;
      this._invocationCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._s3Bucket = value.s3Bucket;
      this._invocationCondition.internalValue = value.invocationCondition;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // invocation_condition - computed: false, optional: true, required: false
  private _invocationCondition = new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(this, "invocation_condition");
  public get invocationCondition() {
    return this._invocationCondition;
  }
  public putInvocationCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition) {
    this._invocationCondition.internalValue = value;
  }
  public resetInvocationCondition() {
    this._invocationCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConditionInput() {
    return this._invocationCondition.internalValue;
  }
}
export interface KendraDataSourceCustomDocumentEnrichmentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * inline_configurations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inline_configurations KendraDataSource#inline_configurations}
  */
  readonly inlineConfigurations?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktf.IResolvable;
  /**
  * post_extraction_hook_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#post_extraction_hook_configuration KendraDataSource#post_extraction_hook_configuration}
  */
  readonly postExtractionHookConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration;
  /**
  * pre_extraction_hook_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#pre_extraction_hook_configuration KendraDataSource#pre_extraction_hook_configuration}
  */
  readonly preExtractionHookConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
}

export function kendraDataSourceCustomDocumentEnrichmentConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    inline_configurations: cdktf.listMapper(kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToTerraform, true)(struct!.inlineConfigurations),
    post_extraction_hook_configuration: kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct!.postExtractionHookConfiguration),
    pre_extraction_hook_configuration: kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct!.preExtractionHookConfiguration),
  }
}

export class KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._inlineConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineConfigurations = this._inlineConfigurations?.internalValue;
    }
    if (this._postExtractionHookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postExtractionHookConfiguration = this._postExtractionHookConfiguration?.internalValue;
    }
    if (this._preExtractionHookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preExtractionHookConfiguration = this._preExtractionHookConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._inlineConfigurations.internalValue = undefined;
      this._postExtractionHookConfiguration.internalValue = undefined;
      this._preExtractionHookConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._inlineConfigurations.internalValue = value.inlineConfigurations;
      this._postExtractionHookConfiguration.internalValue = value.postExtractionHookConfiguration;
      this._preExtractionHookConfiguration.internalValue = value.preExtractionHookConfiguration;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // inline_configurations - computed: false, optional: true, required: false
  private _inlineConfigurations = new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList(this, "inline_configurations", true);
  public get inlineConfigurations() {
    return this._inlineConfigurations;
  }
  public putInlineConfigurations(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktf.IResolvable) {
    this._inlineConfigurations.internalValue = value;
  }
  public resetInlineConfigurations() {
    this._inlineConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineConfigurationsInput() {
    return this._inlineConfigurations.internalValue;
  }

  // post_extraction_hook_configuration - computed: false, optional: true, required: false
  private _postExtractionHookConfiguration = new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(this, "post_extraction_hook_configuration");
  public get postExtractionHookConfiguration() {
    return this._postExtractionHookConfiguration;
  }
  public putPostExtractionHookConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration) {
    this._postExtractionHookConfiguration.internalValue = value;
  }
  public resetPostExtractionHookConfiguration() {
    this._postExtractionHookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postExtractionHookConfigurationInput() {
    return this._postExtractionHookConfiguration.internalValue;
  }

  // pre_extraction_hook_configuration - computed: false, optional: true, required: false
  private _preExtractionHookConfiguration = new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(this, "pre_extraction_hook_configuration");
  public get preExtractionHookConfiguration() {
    return this._preExtractionHookConfiguration;
  }
  public putPreExtractionHookConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration) {
    this._preExtractionHookConfiguration.internalValue = value;
  }
  public resetPreExtractionHookConfiguration() {
    this._preExtractionHookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExtractionHookConfigurationInput() {
    return this._preExtractionHookConfiguration.internalValue;
  }
}
export interface KendraDataSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#create KendraDataSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#delete KendraDataSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#update KendraDataSource#update}
  */
  readonly update?: string;
}

export function kendraDataSourceTimeoutsToTerraform(struct?: KendraDataSourceTimeoutsOutputReference | KendraDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class KendraDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraDataSourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraDataSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source aws_kendra_data_source}
*/
export class KendraDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kendra_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source aws_kendra_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: KendraDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kendra_data_source',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._indexId = config.indexId;
    this._languageCode = config.languageCode;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._schedule = config.schedule;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
    this._customDocumentEnrichmentConfiguration.internalValue = config.customDocumentEnrichmentConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new KendraDataSourceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: KendraDataSourceConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // custom_document_enrichment_configuration - computed: false, optional: true, required: false
  private _customDocumentEnrichmentConfiguration = new KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference(this, "custom_document_enrichment_configuration");
  public get customDocumentEnrichmentConfiguration() {
    return this._customDocumentEnrichmentConfiguration;
  }
  public putCustomDocumentEnrichmentConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfiguration) {
    this._customDocumentEnrichmentConfiguration.internalValue = value;
  }
  public resetCustomDocumentEnrichmentConfiguration() {
    this._customDocumentEnrichmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDocumentEnrichmentConfigurationInput() {
    return this._customDocumentEnrichmentConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KendraDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KendraDataSourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      index_id: cdktf.stringToTerraform(this._indexId),
      language_code: cdktf.stringToTerraform(this._languageCode),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      schedule: cdktf.stringToTerraform(this._schedule),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      configuration: kendraDataSourceConfigurationToTerraform(this._configuration.internalValue),
      custom_document_enrichment_configuration: kendraDataSourceCustomDocumentEnrichmentConfigurationToTerraform(this._customDocumentEnrichmentConfiguration.internalValue),
      timeouts: kendraDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
