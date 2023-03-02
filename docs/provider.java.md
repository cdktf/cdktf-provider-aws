# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-aws.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsProvider <a name="AwsProvider" id="@cdktf/provider-aws.provider.AwsProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.provider.AwsProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProvider;

AwsProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessKey(java.lang.String)
//  .alias(java.lang.String)
//  .allowedAccountIds(java.util.List<java.lang.String>)
//  .assumeRole(IResolvable)
//  .assumeRole(java.util.List<AwsProviderAssumeRole>)
//  .assumeRoleWithWebIdentity(IResolvable)
//  .assumeRoleWithWebIdentity(java.util.List<AwsProviderAssumeRoleWithWebIdentity>)
//  .customCaBundle(java.lang.String)
//  .defaultTags(IResolvable)
//  .defaultTags(java.util.List<AwsProviderDefaultTags>)
//  .ec2MetadataServiceEndpoint(java.lang.String)
//  .ec2MetadataServiceEndpointMode(java.lang.String)
//  .endpoints(IResolvable)
//  .endpoints(java.util.List<AwsProviderEndpoints>)
//  .forbiddenAccountIds(java.util.List<java.lang.String>)
//  .httpProxy(java.lang.String)
//  .ignoreTags(IResolvable)
//  .ignoreTags(java.util.List<AwsProviderIgnoreTags>)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .maxRetries(java.lang.Number)
//  .profile(java.lang.String)
//  .region(java.lang.String)
//  .s3ForcePathStyle(java.lang.Boolean)
//  .s3ForcePathStyle(IResolvable)
//  .s3UsePathStyle(java.lang.Boolean)
//  .s3UsePathStyle(IResolvable)
//  .secretKey(java.lang.String)
//  .sharedConfigFiles(java.util.List<java.lang.String>)
//  .sharedCredentialsFile(java.lang.String)
//  .sharedCredentialsFiles(java.util.List<java.lang.String>)
//  .skipCredentialsValidation(java.lang.Boolean)
//  .skipCredentialsValidation(IResolvable)
//  .skipGetEc2Platforms(java.lang.Boolean)
//  .skipGetEc2Platforms(IResolvable)
//  .skipMetadataApiCheck(java.lang.String)
//  .skipRegionValidation(java.lang.Boolean)
//  .skipRegionValidation(IResolvable)
//  .skipRequestingAccountId(java.lang.Boolean)
//  .skipRequestingAccountId(IResolvable)
//  .stsRegion(java.lang.String)
//  .token(java.lang.String)
//  .useDualstackEndpoint(java.lang.Boolean)
//  .useDualstackEndpoint(IResolvable)
//  .useFipsEndpoint(java.lang.Boolean)
//  .useFipsEndpoint(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.allowedAccountIds">allowedAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRole">assumeRole</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>></code> | assume_role block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>></code> | assume_role_with_web_identity block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.customCaBundle">customCaBundle</a></code> | <code>java.lang.String</code> | File containing custom root and intermediate certificates. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.defaultTags">defaultTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>></code> | default_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpoint">ec2MetadataServiceEndpoint</a></code> | <code>java.lang.String</code> | Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpointMode">ec2MetadataServiceEndpointMode</a></code> | <code>java.lang.String</code> | Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.forbiddenAccountIds">forbiddenAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | The address of an HTTP proxy to use when accessing the AWS API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ignoreTags">ignoreTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>></code> | ignore_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times an AWS API request is being executed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | The profile for API operations. If not set, the default profile created with `aws configure` will be used. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3ForcePathStyle">s3ForcePathStyle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3UsePathStyle">s3UsePathStyle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared config files. If not set, defaults to [~/.aws/config]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFile">sharedCredentialsFile</a></code> | <code>java.lang.String</code> | The path to the shared credentials file. If not set, defaults to ~/.aws/credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipGetEc2Platforms">skipGetEc2Platforms</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.String</code> | Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRegionValidation">skipRegionValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip static validation of region name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRequestingAccountId">skipRequestingAccountId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.stsRegion">stsRegion</a></code> | <code>java.lang.String</code> | The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | session token. A session token is only required if you are using temporary security credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useDualstackEndpoint">useDualstackEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Resolve an endpoint with DualStack capability. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useFipsEndpoint">useFipsEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Resolve an endpoint with FIPS capability. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.allowedAccountIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}.

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRole"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>>

assume_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRoleWithWebIdentity"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>>

assume_role_with_web_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}

---

##### `customCaBundle`<sup>Optional</sup> <a name="customCaBundle" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.customCaBundle"></a>

- *Type:* java.lang.String

File containing custom root and intermediate certificates.

Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#custom_ca_bundle AwsProvider#custom_ca_bundle}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.defaultTags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>>

default_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}

---

##### `ec2MetadataServiceEndpoint`<sup>Optional</sup> <a name="ec2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpoint"></a>

- *Type:* java.lang.String

Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}

---

##### `ec2MetadataServiceEndpointMode`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpointMode"></a>

- *Type:* java.lang.String

Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.endpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}

---

##### `forbiddenAccountIds`<sup>Optional</sup> <a name="forbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.forbiddenAccountIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}.

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.httpProxy"></a>

- *Type:* java.lang.String

The address of an HTTP proxy to use when accessing the AWS API.

Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#http_proxy AwsProvider#http_proxy}

---

##### `ignoreTags`<sup>Optional</sup> <a name="ignoreTags" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ignoreTags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>>

ignore_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

The maximum number of times an AWS API request is being executed.

If the API request still fails, an error is
thrown.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

The profile for API operations. If not set, the default profile created with `aws configure` will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}

---

##### `s3ForcePathStyle`<sup>Optional</sup> <a name="s3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3ForcePathStyle"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}

---

##### `s3UsePathStyle`<sup>Optional</sup> <a name="s3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3UsePathStyle"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_use_path_style AwsProvider#s3_use_path_style}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedConfigFiles"></a>

- *Type:* java.util.List<java.lang.String>

List of paths to shared config files. If not set, defaults to [~/.aws/config].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_config_files AwsProvider#shared_config_files}

---

##### `sharedCredentialsFile`<sup>Optional</sup> <a name="sharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFile"></a>

- *Type:* java.lang.String

The path to the shared credentials file. If not set, defaults to ~/.aws/credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFiles"></a>

- *Type:* java.util.List<java.lang.String>

List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_files AwsProvider#shared_credentials_files}

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipCredentialsValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}

---

##### `skipGetEc2Platforms`<sup>Optional</sup> <a name="skipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipGetEc2Platforms"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipMetadataApiCheck"></a>

- *Type:* java.lang.String

Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}

---

##### `skipRegionValidation`<sup>Optional</sup> <a name="skipRegionValidation" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRegionValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip static validation of region name.

Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}

---

##### `skipRequestingAccountId`<sup>Optional</sup> <a name="skipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRequestingAccountId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.stsRegion"></a>

- *Type:* java.lang.String

The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts_region AwsProvider#sts_region}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

session token. A session token is only required if you are using temporary security credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}

---

##### `useDualstackEndpoint`<sup>Optional</sup> <a name="useDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useDualstackEndpoint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Resolve an endpoint with DualStack capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useFipsEndpoint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Resolve an endpoint with FIPS capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_fips_endpoint AwsProvider#use_fips_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds">resetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity">resetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle">resetCustomCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags">resetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint">resetEc2MetadataServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode">resetEc2MetadataServiceEndpointMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds">resetForbiddenAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags">resetIgnoreTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle">resetS3ForcePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle">resetS3UsePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles">resetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile">resetSharedCredentialsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles">resetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation">resetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms">resetSkipGetEc2Platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck">resetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation">resetSkipRegionValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId">resetSkipRequestingAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetStsRegion">resetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint">resetUseDualstackEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint">resetUseFipsEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.provider.AwsProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.provider.AwsProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.provider.AwsProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.provider.AwsProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-aws.provider.AwsProvider.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.provider.AwsProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAllowedAccountIds` <a name="resetAllowedAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds"></a>

```java
public void resetAllowedAccountIds()
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```

##### `resetAssumeRoleWithWebIdentity` <a name="resetAssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity"></a>

```java
public void resetAssumeRoleWithWebIdentity()
```

##### `resetCustomCaBundle` <a name="resetCustomCaBundle" id="@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle"></a>

```java
public void resetCustomCaBundle()
```

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags"></a>

```java
public void resetDefaultTags()
```

##### `resetEc2MetadataServiceEndpoint` <a name="resetEc2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint"></a>

```java
public void resetEc2MetadataServiceEndpoint()
```

##### `resetEc2MetadataServiceEndpointMode` <a name="resetEc2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode"></a>

```java
public void resetEc2MetadataServiceEndpointMode()
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-aws.provider.AwsProvider.resetEndpoints"></a>

```java
public void resetEndpoints()
```

##### `resetForbiddenAccountIds` <a name="resetForbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds"></a>

```java
public void resetForbiddenAccountIds()
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy"></a>

```java
public void resetHttpProxy()
```

##### `resetIgnoreTags` <a name="resetIgnoreTags" id="@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags"></a>

```java
public void resetIgnoreTags()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-aws.provider.AwsProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-aws.provider.AwsProvider.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.provider.AwsProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetS3ForcePathStyle` <a name="resetS3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle"></a>

```java
public void resetS3ForcePathStyle()
```

##### `resetS3UsePathStyle` <a name="resetS3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle"></a>

```java
public void resetS3UsePathStyle()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-aws.provider.AwsProvider.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetSharedConfigFiles` <a name="resetSharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles"></a>

```java
public void resetSharedConfigFiles()
```

##### `resetSharedCredentialsFile` <a name="resetSharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile"></a>

```java
public void resetSharedCredentialsFile()
```

##### `resetSharedCredentialsFiles` <a name="resetSharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles"></a>

```java
public void resetSharedCredentialsFiles()
```

##### `resetSkipCredentialsValidation` <a name="resetSkipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation"></a>

```java
public void resetSkipCredentialsValidation()
```

##### `resetSkipGetEc2Platforms` <a name="resetSkipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms"></a>

```java
public void resetSkipGetEc2Platforms()
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck"></a>

```java
public void resetSkipMetadataApiCheck()
```

##### `resetSkipRegionValidation` <a name="resetSkipRegionValidation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation"></a>

```java
public void resetSkipRegionValidation()
```

##### `resetSkipRequestingAccountId` <a name="resetSkipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId"></a>

```java
public void resetSkipRequestingAccountId()
```

##### `resetStsRegion` <a name="resetStsRegion" id="@cdktf/provider-aws.provider.AwsProvider.resetStsRegion"></a>

```java
public void resetStsRegion()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-aws.provider.AwsProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUseDualstackEndpoint` <a name="resetUseDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint"></a>

```java
public void resetUseDualstackEndpoint()
```

##### `resetUseFipsEndpoint` <a name="resetUseFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint"></a>

```java
public void resetUseFipsEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.provider.AwsProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProvider;

AwsProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProvider;

AwsProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProvider;

AwsProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput">allowedAccountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput">assumeRoleWithWebIdentityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput">customCaBundleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput">defaultTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput">ec2MetadataServiceEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput">ec2MetadataServiceEndpointModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput">endpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput">forbiddenAccountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput">ignoreTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput">s3ForcePathStyleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput">s3UsePathStyleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput">sharedConfigFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput">sharedCredentialsFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput">sharedCredentialsFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput">skipCredentialsValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput">skipGetEc2PlatformsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput">skipRegionValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput">skipRequestingAccountIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput">stsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput">useDualstackEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput">useFipsEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds">allowedAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRole">assumeRole</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle">customCaBundle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTags">defaultTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint">ec2MetadataServiceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode">ec2MetadataServiceEndpointMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds">forbiddenAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags">ignoreTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle">s3ForcePathStyle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle">s3UsePathStyle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile">sharedCredentialsFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms">skipGetEc2Platforms</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation">skipRegionValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId">skipRequestingAccountId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegion">stsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint">useDualstackEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.provider.AwsProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.provider.AwsProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.provider.AwsProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `allowedAccountIdsInput`<sup>Optional</sup> <a name="allowedAccountIdsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput"></a>

```java
public java.lang.Object getAssumeRoleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>>

---

##### `assumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="assumeRoleWithWebIdentityInput" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput"></a>

```java
public java.lang.Object getAssumeRoleWithWebIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>>

---

##### `customCaBundleInput`<sup>Optional</sup> <a name="customCaBundleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput"></a>

```java
public java.lang.String getCustomCaBundleInput();
```

- *Type:* java.lang.String

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput"></a>

```java
public java.lang.Object getDefaultTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>>

---

##### `ec2MetadataServiceEndpointInput`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput"></a>

```java
public java.lang.String getEc2MetadataServiceEndpointInput();
```

- *Type:* java.lang.String

---

##### `ec2MetadataServiceEndpointModeInput`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointModeInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput"></a>

```java
public java.lang.String getEc2MetadataServiceEndpointModeInput();
```

- *Type:* java.lang.String

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput"></a>

```java
public java.lang.Object getEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>>

---

##### `forbiddenAccountIdsInput`<sup>Optional</sup> <a name="forbiddenAccountIdsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput"></a>

```java
public java.util.List<java.lang.String> getForbiddenAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput"></a>

```java
public java.lang.String getHttpProxyInput();
```

- *Type:* java.lang.String

---

##### `ignoreTagsInput`<sup>Optional</sup> <a name="ignoreTagsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput"></a>

```java
public java.lang.Object getIgnoreTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>>

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-aws.provider.AwsProvider.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-aws.provider.AwsProvider.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.provider.AwsProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `s3ForcePathStyleInput`<sup>Optional</sup> <a name="s3ForcePathStyleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput"></a>

```java
public java.lang.Object getS3ForcePathStyleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `s3UsePathStyleInput`<sup>Optional</sup> <a name="s3UsePathStyleInput" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput"></a>

```java
public java.lang.Object getS3UsePathStyleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `sharedConfigFilesInput`<sup>Optional</sup> <a name="sharedConfigFilesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedCredentialsFileInput`<sup>Optional</sup> <a name="sharedCredentialsFileInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput"></a>

```java
public java.lang.String getSharedCredentialsFileInput();
```

- *Type:* java.lang.String

---

##### `sharedCredentialsFilesInput`<sup>Optional</sup> <a name="sharedCredentialsFilesInput" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipCredentialsValidationInput`<sup>Optional</sup> <a name="skipCredentialsValidationInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput"></a>

```java
public java.lang.Object getSkipCredentialsValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipGetEc2PlatformsInput`<sup>Optional</sup> <a name="skipGetEc2PlatformsInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput"></a>

```java
public java.lang.Object getSkipGetEc2PlatformsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput"></a>

```java
public java.lang.String getSkipMetadataApiCheckInput();
```

- *Type:* java.lang.String

---

##### `skipRegionValidationInput`<sup>Optional</sup> <a name="skipRegionValidationInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput"></a>

```java
public java.lang.Object getSkipRegionValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipRequestingAccountIdInput`<sup>Optional</sup> <a name="skipRequestingAccountIdInput" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput"></a>

```java
public java.lang.Object getSkipRequestingAccountIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stsRegionInput`<sup>Optional</sup> <a name="stsRegionInput" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput"></a>

```java
public java.lang.String getStsRegionInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-aws.provider.AwsProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `useDualstackEndpointInput`<sup>Optional</sup> <a name="useDualstackEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput"></a>

```java
public java.lang.Object getUseDualstackEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useFipsEndpointInput`<sup>Optional</sup> <a name="useFipsEndpointInput" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput"></a>

```java
public java.lang.Object getUseFipsEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds"></a>

```java
public java.util.List<java.lang.String> getAllowedAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRole"></a>

```java
public java.lang.Object getAssumeRole();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>>

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity"></a>

```java
public java.lang.Object getAssumeRoleWithWebIdentity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>>

---

##### `customCaBundle`<sup>Optional</sup> <a name="customCaBundle" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle"></a>

```java
public java.lang.String getCustomCaBundle();
```

- *Type:* java.lang.String

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTags"></a>

```java
public java.lang.Object getDefaultTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>>

---

##### `ec2MetadataServiceEndpoint`<sup>Optional</sup> <a name="ec2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint"></a>

```java
public java.lang.String getEc2MetadataServiceEndpoint();
```

- *Type:* java.lang.String

---

##### `ec2MetadataServiceEndpointMode`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode"></a>

```java
public java.lang.String getEc2MetadataServiceEndpointMode();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProvider.property.endpoints"></a>

```java
public java.lang.Object getEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>>

---

##### `forbiddenAccountIds`<sup>Optional</sup> <a name="forbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds"></a>

```java
public java.util.List<java.lang.String> getForbiddenAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

---

##### `ignoreTags`<sup>Optional</sup> <a name="ignoreTags" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags"></a>

```java
public java.lang.Object getIgnoreTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>>

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProvider.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProvider.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `s3ForcePathStyle`<sup>Optional</sup> <a name="s3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle"></a>

```java
public java.lang.Object getS3ForcePathStyle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `s3UsePathStyle`<sup>Optional</sup> <a name="s3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle"></a>

```java
public java.lang.Object getS3UsePathStyle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedCredentialsFile`<sup>Optional</sup> <a name="sharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile"></a>

```java
public java.lang.String getSharedCredentialsFile();
```

- *Type:* java.lang.String

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation"></a>

```java
public java.lang.Object getSkipCredentialsValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipGetEc2Platforms`<sup>Optional</sup> <a name="skipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms"></a>

```java
public java.lang.Object getSkipGetEc2Platforms();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck"></a>

```java
public java.lang.String getSkipMetadataApiCheck();
```

- *Type:* java.lang.String

---

##### `skipRegionValidation`<sup>Optional</sup> <a name="skipRegionValidation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation"></a>

```java
public java.lang.Object getSkipRegionValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipRequestingAccountId`<sup>Optional</sup> <a name="skipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId"></a>

```java
public java.lang.Object getSkipRequestingAccountId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegion"></a>

```java
public java.lang.String getStsRegion();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `useDualstackEndpoint`<sup>Optional</sup> <a name="useDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint"></a>

```java
public java.lang.Object getUseDualstackEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint"></a>

```java
public java.lang.Object getUseFipsEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsProviderAssumeRole <a name="AwsProviderAssumeRole" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProviderAssumeRole;

AwsProviderAssumeRole.builder()
//  .duration(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .externalId(java.lang.String)
//  .policy(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
//  .sessionName(java.lang.String)
//  .sourceIdentity(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .transitiveTagKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | The duration, in seconds, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId">externalId</a></code> | <code>java.lang.String</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy">policy</a></code> | <code>java.lang.String</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity">sourceIdentity</a></code> | <code>java.lang.String</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

The duration, in seconds, of the role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration_seconds AwsProvider#duration_seconds}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#external_id AwsProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `sourceIdentity`<sup>Optional</sup> <a name="sourceIdentity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity"></a>

```java
public java.lang.String getSourceIdentity();
```

- *Type:* java.lang.String

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#source_identity AwsProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Assume role session tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys"></a>

```java
public java.util.List<java.lang.String> getTransitiveTagKeys();
```

- *Type:* java.util.List<java.lang.String>

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transitive_tag_keys AwsProvider#transitive_tag_keys}

---

### AwsProviderAssumeRoleWithWebIdentity <a name="AwsProviderAssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProviderAssumeRoleWithWebIdentity;

AwsProviderAssumeRoleWithWebIdentity.builder()
//  .duration(java.lang.String)
//  .policy(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
//  .sessionName(java.lang.String)
//  .webIdentityToken(java.lang.String)
//  .webIdentityTokenFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>java.lang.String</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken">webIdentityToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">webIdentityTokenFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `webIdentityToken`<sup>Optional</sup> <a name="webIdentityToken" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```java
public java.lang.String getWebIdentityToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}.

---

##### `webIdentityTokenFile`<sup>Optional</sup> <a name="webIdentityTokenFile" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```java
public java.lang.String getWebIdentityTokenFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}.

---

### AwsProviderConfig <a name="AwsProviderConfig" id="@cdktf/provider-aws.provider.AwsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProviderConfig;

AwsProviderConfig.builder()
//  .accessKey(java.lang.String)
//  .alias(java.lang.String)
//  .allowedAccountIds(java.util.List<java.lang.String>)
//  .assumeRole(IResolvable)
//  .assumeRole(java.util.List<AwsProviderAssumeRole>)
//  .assumeRoleWithWebIdentity(IResolvable)
//  .assumeRoleWithWebIdentity(java.util.List<AwsProviderAssumeRoleWithWebIdentity>)
//  .customCaBundle(java.lang.String)
//  .defaultTags(IResolvable)
//  .defaultTags(java.util.List<AwsProviderDefaultTags>)
//  .ec2MetadataServiceEndpoint(java.lang.String)
//  .ec2MetadataServiceEndpointMode(java.lang.String)
//  .endpoints(IResolvable)
//  .endpoints(java.util.List<AwsProviderEndpoints>)
//  .forbiddenAccountIds(java.util.List<java.lang.String>)
//  .httpProxy(java.lang.String)
//  .ignoreTags(IResolvable)
//  .ignoreTags(java.util.List<AwsProviderIgnoreTags>)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .maxRetries(java.lang.Number)
//  .profile(java.lang.String)
//  .region(java.lang.String)
//  .s3ForcePathStyle(java.lang.Boolean)
//  .s3ForcePathStyle(IResolvable)
//  .s3UsePathStyle(java.lang.Boolean)
//  .s3UsePathStyle(IResolvable)
//  .secretKey(java.lang.String)
//  .sharedConfigFiles(java.util.List<java.lang.String>)
//  .sharedCredentialsFile(java.lang.String)
//  .sharedCredentialsFiles(java.util.List<java.lang.String>)
//  .skipCredentialsValidation(java.lang.Boolean)
//  .skipCredentialsValidation(IResolvable)
//  .skipGetEc2Platforms(java.lang.Boolean)
//  .skipGetEc2Platforms(IResolvable)
//  .skipMetadataApiCheck(java.lang.String)
//  .skipRegionValidation(java.lang.Boolean)
//  .skipRegionValidation(IResolvable)
//  .skipRequestingAccountId(java.lang.Boolean)
//  .skipRequestingAccountId(IResolvable)
//  .stsRegion(java.lang.String)
//  .token(java.lang.String)
//  .useDualstackEndpoint(java.lang.Boolean)
//  .useDualstackEndpoint(IResolvable)
//  .useFipsEndpoint(java.lang.Boolean)
//  .useFipsEndpoint(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds">allowedAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole">assumeRole</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>></code> | assume_role block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>></code> | assume_role_with_web_identity block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle">customCaBundle</a></code> | <code>java.lang.String</code> | File containing custom root and intermediate certificates. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags">defaultTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>></code> | default_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint">ec2MetadataServiceEndpoint</a></code> | <code>java.lang.String</code> | Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode">ec2MetadataServiceEndpointMode</a></code> | <code>java.lang.String</code> | Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds">forbiddenAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | The address of an HTTP proxy to use when accessing the AWS API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags">ignoreTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>></code> | ignore_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times an AWS API request is being executed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | The profile for API operations. If not set, the default profile created with `aws configure` will be used. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle">s3ForcePathStyle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle">s3UsePathStyle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared config files. If not set, defaults to [~/.aws/config]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile">sharedCredentialsFile</a></code> | <code>java.lang.String</code> | The path to the shared credentials file. If not set, defaults to ~/.aws/credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms">skipGetEc2Platforms</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.String</code> | Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation">skipRegionValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip static validation of region name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId">skipRequestingAccountId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion">stsRegion</a></code> | <code>java.lang.String</code> | The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | session token. A session token is only required if you are using temporary security credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint">useDualstackEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Resolve an endpoint with DualStack capability. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Resolve an endpoint with FIPS capability. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds"></a>

```java
public java.util.List<java.lang.String> getAllowedAccountIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}.

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole"></a>

```java
public java.lang.Object getAssumeRole();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>>

assume_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity"></a>

```java
public java.lang.Object getAssumeRoleWithWebIdentity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>>

assume_role_with_web_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}

---

##### `customCaBundle`<sup>Optional</sup> <a name="customCaBundle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle"></a>

```java
public java.lang.String getCustomCaBundle();
```

- *Type:* java.lang.String

File containing custom root and intermediate certificates.

Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#custom_ca_bundle AwsProvider#custom_ca_bundle}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags"></a>

```java
public java.lang.Object getDefaultTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>>

default_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}

---

##### `ec2MetadataServiceEndpoint`<sup>Optional</sup> <a name="ec2MetadataServiceEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint"></a>

```java
public java.lang.String getEc2MetadataServiceEndpoint();
```

- *Type:* java.lang.String

Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}

---

##### `ec2MetadataServiceEndpointMode`<sup>Optional</sup> <a name="ec2MetadataServiceEndpointMode" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode"></a>

```java
public java.lang.String getEc2MetadataServiceEndpointMode();
```

- *Type:* java.lang.String

Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints"></a>

```java
public java.lang.Object getEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}

---

##### `forbiddenAccountIds`<sup>Optional</sup> <a name="forbiddenAccountIds" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds"></a>

```java
public java.util.List<java.lang.String> getForbiddenAccountIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}.

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

The address of an HTTP proxy to use when accessing the AWS API.

Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#http_proxy AwsProvider#http_proxy}

---

##### `ignoreTags`<sup>Optional</sup> <a name="ignoreTags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags"></a>

```java
public java.lang.Object getIgnoreTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>>

ignore_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of times an AWS API request is being executed.

If the API request still fails, an error is
thrown.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

The profile for API operations. If not set, the default profile created with `aws configure` will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}

---

##### `s3ForcePathStyle`<sup>Optional</sup> <a name="s3ForcePathStyle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle"></a>

```java
public java.lang.Object getS3ForcePathStyle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}

---

##### `s3UsePathStyle`<sup>Optional</sup> <a name="s3UsePathStyle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle"></a>

```java
public java.lang.Object getS3UsePathStyle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_use_path_style AwsProvider#s3_use_path_style}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFiles();
```

- *Type:* java.util.List<java.lang.String>

List of paths to shared config files. If not set, defaults to [~/.aws/config].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_config_files AwsProvider#shared_config_files}

---

##### `sharedCredentialsFile`<sup>Optional</sup> <a name="sharedCredentialsFile" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile"></a>

```java
public java.lang.String getSharedCredentialsFile();
```

- *Type:* java.lang.String

The path to the shared credentials file. If not set, defaults to ~/.aws/credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFiles();
```

- *Type:* java.util.List<java.lang.String>

List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_files AwsProvider#shared_credentials_files}

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation"></a>

```java
public java.lang.Object getSkipCredentialsValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}

---

##### `skipGetEc2Platforms`<sup>Optional</sup> <a name="skipGetEc2Platforms" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms"></a>

```java
public java.lang.Object getSkipGetEc2Platforms();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck"></a>

```java
public java.lang.String getSkipMetadataApiCheck();
```

- *Type:* java.lang.String

Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}

---

##### `skipRegionValidation`<sup>Optional</sup> <a name="skipRegionValidation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation"></a>

```java
public java.lang.Object getSkipRegionValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip static validation of region name.

Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}

---

##### `skipRequestingAccountId`<sup>Optional</sup> <a name="skipRequestingAccountId" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId"></a>

```java
public java.lang.Object getSkipRequestingAccountId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion"></a>

```java
public java.lang.String getStsRegion();
```

- *Type:* java.lang.String

The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts_region AwsProvider#sts_region}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

session token. A session token is only required if you are using temporary security credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}

---

##### `useDualstackEndpoint`<sup>Optional</sup> <a name="useDualstackEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint"></a>

```java
public java.lang.Object getUseDualstackEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Resolve an endpoint with DualStack capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint"></a>

```java
public java.lang.Object getUseFipsEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Resolve an endpoint with FIPS capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_fips_endpoint AwsProvider#use_fips_endpoint}

---

### AwsProviderDefaultTags <a name="AwsProviderDefaultTags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProviderDefaultTags;

AwsProviderDefaultTags.builder()
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource tags to default across all resources. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource tags to default across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

### AwsProviderEndpoints <a name="AwsProviderEndpoints" id="@cdktf/provider-aws.provider.AwsProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProviderEndpoints;

AwsProviderEndpoints.builder()
//  .accessanalyzer(java.lang.String)
//  .account(java.lang.String)
//  .acm(java.lang.String)
//  .acmpca(java.lang.String)
//  .alexaforbusiness(java.lang.String)
//  .amg(java.lang.String)
//  .amp(java.lang.String)
//  .amplify(java.lang.String)
//  .amplifybackend(java.lang.String)
//  .amplifyuibuilder(java.lang.String)
//  .apigateway(java.lang.String)
//  .apigatewaymanagementapi(java.lang.String)
//  .apigatewayv2(java.lang.String)
//  .appautoscaling(java.lang.String)
//  .appconfig(java.lang.String)
//  .appconfigdata(java.lang.String)
//  .appflow(java.lang.String)
//  .appintegrations(java.lang.String)
//  .appintegrationsservice(java.lang.String)
//  .applicationautoscaling(java.lang.String)
//  .applicationcostprofiler(java.lang.String)
//  .applicationdiscovery(java.lang.String)
//  .applicationdiscoveryservice(java.lang.String)
//  .applicationinsights(java.lang.String)
//  .appmesh(java.lang.String)
//  .appregistry(java.lang.String)
//  .apprunner(java.lang.String)
//  .appstream(java.lang.String)
//  .appsync(java.lang.String)
//  .athena(java.lang.String)
//  .auditmanager(java.lang.String)
//  .augmentedairuntime(java.lang.String)
//  .autoscaling(java.lang.String)
//  .autoscalingplans(java.lang.String)
//  .backup(java.lang.String)
//  .backupgateway(java.lang.String)
//  .batch(java.lang.String)
//  .beanstalk(java.lang.String)
//  .billingconductor(java.lang.String)
//  .braket(java.lang.String)
//  .budgets(java.lang.String)
//  .ce(java.lang.String)
//  .chime(java.lang.String)
//  .chimesdkidentity(java.lang.String)
//  .chimesdkmeetings(java.lang.String)
//  .chimesdkmessaging(java.lang.String)
//  .cloud9(java.lang.String)
//  .cloudcontrol(java.lang.String)
//  .cloudcontrolapi(java.lang.String)
//  .clouddirectory(java.lang.String)
//  .cloudformation(java.lang.String)
//  .cloudfront(java.lang.String)
//  .cloudhsm(java.lang.String)
//  .cloudhsmv2(java.lang.String)
//  .cloudsearch(java.lang.String)
//  .cloudsearchdomain(java.lang.String)
//  .cloudtrail(java.lang.String)
//  .cloudwatch(java.lang.String)
//  .cloudwatchevents(java.lang.String)
//  .cloudwatchevidently(java.lang.String)
//  .cloudwatchlog(java.lang.String)
//  .cloudwatchlogs(java.lang.String)
//  .cloudwatchobservabilityaccessmanager(java.lang.String)
//  .cloudwatchrum(java.lang.String)
//  .codeartifact(java.lang.String)
//  .codebuild(java.lang.String)
//  .codecommit(java.lang.String)
//  .codedeploy(java.lang.String)
//  .codeguruprofiler(java.lang.String)
//  .codegurureviewer(java.lang.String)
//  .codepipeline(java.lang.String)
//  .codestar(java.lang.String)
//  .codestarconnections(java.lang.String)
//  .codestarnotifications(java.lang.String)
//  .cognitoidentity(java.lang.String)
//  .cognitoidentityprovider(java.lang.String)
//  .cognitoidp(java.lang.String)
//  .cognitosync(java.lang.String)
//  .comprehend(java.lang.String)
//  .comprehendmedical(java.lang.String)
//  .computeoptimizer(java.lang.String)
//  .config(java.lang.String)
//  .configservice(java.lang.String)
//  .connect(java.lang.String)
//  .connectcontactlens(java.lang.String)
//  .connectparticipant(java.lang.String)
//  .connectwisdomservice(java.lang.String)
//  .controltower(java.lang.String)
//  .costandusagereportservice(java.lang.String)
//  .costexplorer(java.lang.String)
//  .cur(java.lang.String)
//  .customerprofiles(java.lang.String)
//  .databasemigration(java.lang.String)
//  .databasemigrationservice(java.lang.String)
//  .databrew(java.lang.String)
//  .dataexchange(java.lang.String)
//  .datapipeline(java.lang.String)
//  .datasync(java.lang.String)
//  .dax(java.lang.String)
//  .deploy(java.lang.String)
//  .detective(java.lang.String)
//  .devicefarm(java.lang.String)
//  .devopsguru(java.lang.String)
//  .directconnect(java.lang.String)
//  .directoryservice(java.lang.String)
//  .discovery(java.lang.String)
//  .dlm(java.lang.String)
//  .dms(java.lang.String)
//  .docdb(java.lang.String)
//  .drs(java.lang.String)
//  .ds(java.lang.String)
//  .dynamodb(java.lang.String)
//  .dynamodbstreams(java.lang.String)
//  .ebs(java.lang.String)
//  .ec2(java.lang.String)
//  .ec2Instanceconnect(java.lang.String)
//  .ecr(java.lang.String)
//  .ecrpublic(java.lang.String)
//  .ecs(java.lang.String)
//  .efs(java.lang.String)
//  .eks(java.lang.String)
//  .elasticache(java.lang.String)
//  .elasticbeanstalk(java.lang.String)
//  .elasticinference(java.lang.String)
//  .elasticloadbalancing(java.lang.String)
//  .elasticloadbalancingv2(java.lang.String)
//  .elasticsearch(java.lang.String)
//  .elasticsearchservice(java.lang.String)
//  .elastictranscoder(java.lang.String)
//  .elb(java.lang.String)
//  .elbv2(java.lang.String)
//  .emr(java.lang.String)
//  .emrcontainers(java.lang.String)
//  .emrserverless(java.lang.String)
//  .es(java.lang.String)
//  .eventbridge(java.lang.String)
//  .events(java.lang.String)
//  .evidently(java.lang.String)
//  .finspace(java.lang.String)
//  .finspacedata(java.lang.String)
//  .firehose(java.lang.String)
//  .fis(java.lang.String)
//  .fms(java.lang.String)
//  .forecast(java.lang.String)
//  .forecastquery(java.lang.String)
//  .forecastqueryservice(java.lang.String)
//  .forecastservice(java.lang.String)
//  .frauddetector(java.lang.String)
//  .fsx(java.lang.String)
//  .gamelift(java.lang.String)
//  .glacier(java.lang.String)
//  .globalaccelerator(java.lang.String)
//  .glue(java.lang.String)
//  .gluedatabrew(java.lang.String)
//  .grafana(java.lang.String)
//  .greengrass(java.lang.String)
//  .greengrassv2(java.lang.String)
//  .groundstation(java.lang.String)
//  .guardduty(java.lang.String)
//  .health(java.lang.String)
//  .healthlake(java.lang.String)
//  .honeycode(java.lang.String)
//  .iam(java.lang.String)
//  .identitystore(java.lang.String)
//  .imagebuilder(java.lang.String)
//  .inspector(java.lang.String)
//  .inspector2(java.lang.String)
//  .inspectorv2(java.lang.String)
//  .iot(java.lang.String)
//  .iot1Clickdevices(java.lang.String)
//  .iot1Clickdevicesservice(java.lang.String)
//  .iot1Clickprojects(java.lang.String)
//  .iotanalytics(java.lang.String)
//  .iotdata(java.lang.String)
//  .iotdataplane(java.lang.String)
//  .iotdeviceadvisor(java.lang.String)
//  .iotevents(java.lang.String)
//  .ioteventsdata(java.lang.String)
//  .iotfleethub(java.lang.String)
//  .iotjobsdata(java.lang.String)
//  .iotjobsdataplane(java.lang.String)
//  .iotsecuretunneling(java.lang.String)
//  .iotsitewise(java.lang.String)
//  .iotthingsgraph(java.lang.String)
//  .iottwinmaker(java.lang.String)
//  .iotwireless(java.lang.String)
//  .ivs(java.lang.String)
//  .ivschat(java.lang.String)
//  .kafka(java.lang.String)
//  .kafkaconnect(java.lang.String)
//  .kendra(java.lang.String)
//  .keyspaces(java.lang.String)
//  .kinesis(java.lang.String)
//  .kinesisanalytics(java.lang.String)
//  .kinesisanalyticsv2(java.lang.String)
//  .kinesisvideo(java.lang.String)
//  .kinesisvideoarchivedmedia(java.lang.String)
//  .kinesisvideomedia(java.lang.String)
//  .kinesisvideosignaling(java.lang.String)
//  .kinesisvideosignalingchannels(java.lang.String)
//  .kms(java.lang.String)
//  .lakeformation(java.lang.String)
//  .lambda(java.lang.String)
//  .lex(java.lang.String)
//  .lexmodelbuilding(java.lang.String)
//  .lexmodelbuildingservice(java.lang.String)
//  .lexmodels(java.lang.String)
//  .lexmodelsv2(java.lang.String)
//  .lexruntime(java.lang.String)
//  .lexruntimeservice(java.lang.String)
//  .lexruntimev2(java.lang.String)
//  .lexv2Models(java.lang.String)
//  .lexv2Runtime(java.lang.String)
//  .licensemanager(java.lang.String)
//  .lightsail(java.lang.String)
//  .location(java.lang.String)
//  .locationservice(java.lang.String)
//  .logs(java.lang.String)
//  .lookoutequipment(java.lang.String)
//  .lookoutforvision(java.lang.String)
//  .lookoutmetrics(java.lang.String)
//  .lookoutvision(java.lang.String)
//  .machinelearning(java.lang.String)
//  .macie(java.lang.String)
//  .macie2(java.lang.String)
//  .managedblockchain(java.lang.String)
//  .managedgrafana(java.lang.String)
//  .marketplacecatalog(java.lang.String)
//  .marketplacecommerceanalytics(java.lang.String)
//  .marketplaceentitlement(java.lang.String)
//  .marketplaceentitlementservice(java.lang.String)
//  .marketplacemetering(java.lang.String)
//  .mediaconnect(java.lang.String)
//  .mediaconvert(java.lang.String)
//  .medialive(java.lang.String)
//  .mediapackage(java.lang.String)
//  .mediapackagevod(java.lang.String)
//  .mediastore(java.lang.String)
//  .mediastoredata(java.lang.String)
//  .mediatailor(java.lang.String)
//  .memorydb(java.lang.String)
//  .meteringmarketplace(java.lang.String)
//  .mgh(java.lang.String)
//  .mgn(java.lang.String)
//  .migrationhub(java.lang.String)
//  .migrationhubconfig(java.lang.String)
//  .migrationhubrefactorspaces(java.lang.String)
//  .migrationhubstrategy(java.lang.String)
//  .migrationhubstrategyrecommendations(java.lang.String)
//  .mobile(java.lang.String)
//  .mq(java.lang.String)
//  .msk(java.lang.String)
//  .mturk(java.lang.String)
//  .mwaa(java.lang.String)
//  .neptune(java.lang.String)
//  .networkfirewall(java.lang.String)
//  .networkmanager(java.lang.String)
//  .nimble(java.lang.String)
//  .nimblestudio(java.lang.String)
//  .oam(java.lang.String)
//  .opensearch(java.lang.String)
//  .opensearchserverless(java.lang.String)
//  .opensearchservice(java.lang.String)
//  .opsworks(java.lang.String)
//  .opsworkscm(java.lang.String)
//  .organizations(java.lang.String)
//  .outposts(java.lang.String)
//  .panorama(java.lang.String)
//  .personalize(java.lang.String)
//  .personalizeevents(java.lang.String)
//  .personalizeruntime(java.lang.String)
//  .pi(java.lang.String)
//  .pinpoint(java.lang.String)
//  .pinpointemail(java.lang.String)
//  .pinpointsmsvoice(java.lang.String)
//  .pipes(java.lang.String)
//  .polly(java.lang.String)
//  .pricing(java.lang.String)
//  .prometheus(java.lang.String)
//  .prometheusservice(java.lang.String)
//  .proton(java.lang.String)
//  .qldb(java.lang.String)
//  .qldbsession(java.lang.String)
//  .quicksight(java.lang.String)
//  .ram(java.lang.String)
//  .rbin(java.lang.String)
//  .rds(java.lang.String)
//  .rdsdata(java.lang.String)
//  .rdsdataservice(java.lang.String)
//  .recyclebin(java.lang.String)
//  .redshift(java.lang.String)
//  .redshiftdata(java.lang.String)
//  .redshiftdataapiservice(java.lang.String)
//  .redshiftserverless(java.lang.String)
//  .rekognition(java.lang.String)
//  .resiliencehub(java.lang.String)
//  .resourceexplorer2(java.lang.String)
//  .resourcegroups(java.lang.String)
//  .resourcegroupstagging(java.lang.String)
//  .resourcegroupstaggingapi(java.lang.String)
//  .robomaker(java.lang.String)
//  .rolesanywhere(java.lang.String)
//  .route53(java.lang.String)
//  .route53Domains(java.lang.String)
//  .route53Recoverycluster(java.lang.String)
//  .route53Recoverycontrolconfig(java.lang.String)
//  .route53Recoveryreadiness(java.lang.String)
//  .route53Resolver(java.lang.String)
//  .rum(java.lang.String)
//  .s3(java.lang.String)
//  .s3Api(java.lang.String)
//  .s3Control(java.lang.String)
//  .s3Outposts(java.lang.String)
//  .sagemaker(java.lang.String)
//  .sagemakera2Iruntime(java.lang.String)
//  .sagemakeredge(java.lang.String)
//  .sagemakeredgemanager(java.lang.String)
//  .sagemakerfeaturestoreruntime(java.lang.String)
//  .sagemakerruntime(java.lang.String)
//  .savingsplans(java.lang.String)
//  .scheduler(java.lang.String)
//  .schemas(java.lang.String)
//  .sdb(java.lang.String)
//  .secretsmanager(java.lang.String)
//  .securityhub(java.lang.String)
//  .serverlessapplicationrepository(java.lang.String)
//  .serverlessapprepo(java.lang.String)
//  .serverlessrepo(java.lang.String)
//  .servicecatalog(java.lang.String)
//  .servicecatalogappregistry(java.lang.String)
//  .servicediscovery(java.lang.String)
//  .servicequotas(java.lang.String)
//  .ses(java.lang.String)
//  .sesv2(java.lang.String)
//  .sfn(java.lang.String)
//  .shield(java.lang.String)
//  .signer(java.lang.String)
//  .simpledb(java.lang.String)
//  .sms(java.lang.String)
//  .snowball(java.lang.String)
//  .snowdevicemanagement(java.lang.String)
//  .sns(java.lang.String)
//  .sqs(java.lang.String)
//  .ssm(java.lang.String)
//  .ssmcontacts(java.lang.String)
//  .ssmincidents(java.lang.String)
//  .sso(java.lang.String)
//  .ssoadmin(java.lang.String)
//  .ssooidc(java.lang.String)
//  .stepfunctions(java.lang.String)
//  .storagegateway(java.lang.String)
//  .sts(java.lang.String)
//  .support(java.lang.String)
//  .swf(java.lang.String)
//  .synthetics(java.lang.String)
//  .textract(java.lang.String)
//  .timestreamquery(java.lang.String)
//  .timestreamwrite(java.lang.String)
//  .transcribe(java.lang.String)
//  .transcribeservice(java.lang.String)
//  .transcribestreaming(java.lang.String)
//  .transcribestreamingservice(java.lang.String)
//  .transfer(java.lang.String)
//  .translate(java.lang.String)
//  .voiceid(java.lang.String)
//  .waf(java.lang.String)
//  .wafregional(java.lang.String)
//  .wafv2(java.lang.String)
//  .wellarchitected(java.lang.String)
//  .wisdom(java.lang.String)
//  .workdocs(java.lang.String)
//  .worklink(java.lang.String)
//  .workmail(java.lang.String)
//  .workmailmessageflow(java.lang.String)
//  .workspaces(java.lang.String)
//  .workspacesweb(java.lang.String)
//  .xray(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer">accessanalyzer</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account">account</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm">acm</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca">acmpca</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness">alexaforbusiness</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg">amg</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp">amp</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify">amplify</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend">amplifybackend</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder">amplifyuibuilder</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway">apigateway</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi">apigatewaymanagementapi</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2">apigatewayv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling">appautoscaling</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig">appconfig</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata">appconfigdata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow">appflow</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations">appintegrations</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice">appintegrationsservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling">applicationautoscaling</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler">applicationcostprofiler</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery">applicationdiscovery</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice">applicationdiscoveryservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights">applicationinsights</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh">appmesh</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry">appregistry</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner">apprunner</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream">appstream</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync">appsync</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena">athena</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager">auditmanager</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime">augmentedairuntime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling">autoscaling</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans">autoscalingplans</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup">backup</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway">backupgateway</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch">batch</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk">beanstalk</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor">billingconductor</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket">braket</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets">budgets</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce">ce</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime">chime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity">chimesdkidentity</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings">chimesdkmeetings</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging">chimesdkmessaging</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9">cloud9</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol">cloudcontrol</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi">cloudcontrolapi</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory">clouddirectory</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation">cloudformation</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront">cloudfront</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm">cloudhsm</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2">cloudhsmv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch">cloudsearch</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain">cloudsearchdomain</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail">cloudtrail</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch">cloudwatch</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents">cloudwatchevents</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently">cloudwatchevidently</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog">cloudwatchlog</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs">cloudwatchlogs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager">cloudwatchobservabilityaccessmanager</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum">cloudwatchrum</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact">codeartifact</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild">codebuild</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit">codecommit</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy">codedeploy</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler">codeguruprofiler</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer">codegurureviewer</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline">codepipeline</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar">codestar</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections">codestarconnections</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications">codestarnotifications</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity">cognitoidentity</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider">cognitoidentityprovider</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp">cognitoidp</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync">cognitosync</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend">comprehend</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical">comprehendmedical</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer">computeoptimizer</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config">config</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice">configservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect">connect</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens">connectcontactlens</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant">connectparticipant</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice">connectwisdomservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower">controltower</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice">costandusagereportservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer">costexplorer</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur">cur</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles">customerprofiles</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration">databasemigration</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice">databasemigrationservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew">databrew</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange">dataexchange</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline">datapipeline</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync">datasync</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax">dax</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy">deploy</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective">detective</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm">devicefarm</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru">devopsguru</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect">directconnect</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice">directoryservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery">discovery</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm">dlm</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms">dms</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb">docdb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs">drs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds">ds</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb">dynamodb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams">dynamodbstreams</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs">ebs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2">ec2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect">ec2Instanceconnect</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr">ecr</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic">ecrpublic</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs">ecs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs">efs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks">eks</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache">elasticache</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk">elasticbeanstalk</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference">elasticinference</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing">elasticloadbalancing</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2">elasticloadbalancingv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch">elasticsearch</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice">elasticsearchservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder">elastictranscoder</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb">elb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2">elbv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr">emr</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers">emrcontainers</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless">emrserverless</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es">es</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge">eventbridge</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events">events</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently">evidently</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace">finspace</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata">finspacedata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose">firehose</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis">fis</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms">fms</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast">forecast</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery">forecastquery</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice">forecastqueryservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice">forecastservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector">frauddetector</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx">fsx</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift">gamelift</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier">glacier</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator">globalaccelerator</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue">glue</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew">gluedatabrew</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana">grafana</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass">greengrass</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2">greengrassv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation">groundstation</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty">guardduty</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health">health</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake">healthlake</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode">honeycode</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam">iam</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore">identitystore</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder">imagebuilder</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector">inspector</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2">inspector2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2">inspectorv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot">iot</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices">iot1Clickdevices</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice">iot1Clickdevicesservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects">iot1Clickprojects</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics">iotanalytics</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata">iotdata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane">iotdataplane</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor">iotdeviceadvisor</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents">iotevents</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata">ioteventsdata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub">iotfleethub</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata">iotjobsdata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane">iotjobsdataplane</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling">iotsecuretunneling</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise">iotsitewise</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph">iotthingsgraph</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker">iottwinmaker</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless">iotwireless</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs">ivs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat">ivschat</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka">kafka</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect">kafkaconnect</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra">kendra</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces">keyspaces</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis">kinesis</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics">kinesisanalytics</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2">kinesisanalyticsv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo">kinesisvideo</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia">kinesisvideoarchivedmedia</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia">kinesisvideomedia</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling">kinesisvideosignaling</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels">kinesisvideosignalingchannels</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms">kms</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation">lakeformation</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda">lambda</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex">lex</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding">lexmodelbuilding</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice">lexmodelbuildingservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels">lexmodels</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2">lexmodelsv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime">lexruntime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice">lexruntimeservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2">lexruntimev2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models">lexv2Models</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime">lexv2Runtime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager">licensemanager</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail">lightsail</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location">location</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice">locationservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs">logs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment">lookoutequipment</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision">lookoutforvision</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics">lookoutmetrics</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision">lookoutvision</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning">machinelearning</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie">macie</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2">macie2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain">managedblockchain</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana">managedgrafana</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog">marketplacecatalog</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics">marketplacecommerceanalytics</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement">marketplaceentitlement</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice">marketplaceentitlementservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering">marketplacemetering</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect">mediaconnect</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert">mediaconvert</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive">medialive</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage">mediapackage</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod">mediapackagevod</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore">mediastore</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata">mediastoredata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor">mediatailor</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb">memorydb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace">meteringmarketplace</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh">mgh</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn">mgn</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub">migrationhub</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig">migrationhubconfig</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces">migrationhubrefactorspaces</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy">migrationhubstrategy</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations">migrationhubstrategyrecommendations</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile">mobile</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq">mq</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk">msk</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk">mturk</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa">mwaa</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune">neptune</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall">networkfirewall</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager">networkmanager</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble">nimble</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio">nimblestudio</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam">oam</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch">opensearch</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless">opensearchserverless</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice">opensearchservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks">opsworks</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm">opsworkscm</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations">organizations</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts">outposts</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama">panorama</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize">personalize</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents">personalizeevents</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime">personalizeruntime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi">pi</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint">pinpoint</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail">pinpointemail</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice">pinpointsmsvoice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes">pipes</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly">polly</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing">pricing</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus">prometheus</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice">prometheusservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton">proton</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb">qldb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession">qldbsession</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight">quicksight</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram">ram</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin">rbin</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds">rds</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata">rdsdata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice">rdsdataservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin">recyclebin</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift">redshift</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata">redshiftdata</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice">redshiftdataapiservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless">redshiftserverless</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition">rekognition</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub">resiliencehub</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2">resourceexplorer2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups">resourcegroups</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging">resourcegroupstagging</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi">resourcegroupstaggingapi</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker">robomaker</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere">rolesanywhere</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53">route53</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains">route53Domains</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster">route53Recoverycluster</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig">route53Recoverycontrolconfig</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness">route53Recoveryreadiness</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver">route53Resolver</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum">rum</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3">s3</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api">s3Api</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control">s3Control</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts">s3Outposts</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker">sagemaker</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime">sagemakera2Iruntime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge">sagemakeredge</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager">sagemakeredgemanager</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime">sagemakerfeaturestoreruntime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime">sagemakerruntime</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans">savingsplans</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler">scheduler</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas">schemas</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb">sdb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager">secretsmanager</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub">securityhub</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository">serverlessapplicationrepository</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo">serverlessapprepo</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo">serverlessrepo</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog">servicecatalog</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry">servicecatalogappregistry</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery">servicediscovery</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas">servicequotas</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses">ses</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2">sesv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn">sfn</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield">shield</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer">signer</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb">simpledb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms">sms</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball">snowball</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement">snowdevicemanagement</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns">sns</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs">sqs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm">ssm</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts">ssmcontacts</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents">ssmincidents</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso">sso</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin">ssoadmin</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc">ssooidc</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions">stepfunctions</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway">storagegateway</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts">sts</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support">support</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf">swf</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics">synthetics</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract">textract</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery">timestreamquery</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite">timestreamwrite</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe">transcribe</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice">transcribeservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming">transcribestreaming</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice">transcribestreamingservice</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer">transfer</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate">translate</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid">voiceid</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf">waf</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional">wafregional</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2">wafv2</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected">wellarchitected</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom">wisdom</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs">workdocs</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink">worklink</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail">workmail</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow">workmailmessageflow</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces">workspaces</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb">workspacesweb</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray">xray</a></code> | <code>java.lang.String</code> | Use this to override the default service endpoint URL. |

---

##### `accessanalyzer`<sup>Optional</sup> <a name="accessanalyzer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer"></a>

```java
public java.lang.String getAccessanalyzer();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#accessanalyzer AwsProvider#accessanalyzer}

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#account AwsProvider#account}

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm"></a>

```java
public java.lang.String getAcm();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acm AwsProvider#acm}

---

##### `acmpca`<sup>Optional</sup> <a name="acmpca" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca"></a>

```java
public java.lang.String getAcmpca();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acmpca AwsProvider#acmpca}

---

##### `alexaforbusiness`<sup>Optional</sup> <a name="alexaforbusiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness"></a>

```java
public java.lang.String getAlexaforbusiness();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alexaforbusiness AwsProvider#alexaforbusiness}

---

##### `amg`<sup>Optional</sup> <a name="amg" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg"></a>

```java
public java.lang.String getAmg();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amg AwsProvider#amg}

---

##### `amp`<sup>Optional</sup> <a name="amp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp"></a>

```java
public java.lang.String getAmp();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amp AwsProvider#amp}

---

##### `amplify`<sup>Optional</sup> <a name="amplify" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify"></a>

```java
public java.lang.String getAmplify();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplify AwsProvider#amplify}

---

##### `amplifybackend`<sup>Optional</sup> <a name="amplifybackend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend"></a>

```java
public java.lang.String getAmplifybackend();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifybackend AwsProvider#amplifybackend}

---

##### `amplifyuibuilder`<sup>Optional</sup> <a name="amplifyuibuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder"></a>

```java
public java.lang.String getAmplifyuibuilder();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifyuibuilder AwsProvider#amplifyuibuilder}

---

##### `apigateway`<sup>Optional</sup> <a name="apigateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway"></a>

```java
public java.lang.String getApigateway();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigateway AwsProvider#apigateway}

---

##### `apigatewaymanagementapi`<sup>Optional</sup> <a name="apigatewaymanagementapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi"></a>

```java
public java.lang.String getApigatewaymanagementapi();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewaymanagementapi AwsProvider#apigatewaymanagementapi}

---

##### `apigatewayv2`<sup>Optional</sup> <a name="apigatewayv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2"></a>

```java
public java.lang.String getApigatewayv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewayv2 AwsProvider#apigatewayv2}

---

##### `appautoscaling`<sup>Optional</sup> <a name="appautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling"></a>

```java
public java.lang.String getAppautoscaling();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appautoscaling AwsProvider#appautoscaling}

---

##### `appconfig`<sup>Optional</sup> <a name="appconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig"></a>

```java
public java.lang.String getAppconfig();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfig AwsProvider#appconfig}

---

##### `appconfigdata`<sup>Optional</sup> <a name="appconfigdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata"></a>

```java
public java.lang.String getAppconfigdata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfigdata AwsProvider#appconfigdata}

---

##### `appflow`<sup>Optional</sup> <a name="appflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow"></a>

```java
public java.lang.String getAppflow();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appflow AwsProvider#appflow}

---

##### `appintegrations`<sup>Optional</sup> <a name="appintegrations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations"></a>

```java
public java.lang.String getAppintegrations();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrations AwsProvider#appintegrations}

---

##### `appintegrationsservice`<sup>Optional</sup> <a name="appintegrationsservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice"></a>

```java
public java.lang.String getAppintegrationsservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrationsservice AwsProvider#appintegrationsservice}

---

##### `applicationautoscaling`<sup>Optional</sup> <a name="applicationautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling"></a>

```java
public java.lang.String getApplicationautoscaling();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationautoscaling AwsProvider#applicationautoscaling}

---

##### `applicationcostprofiler`<sup>Optional</sup> <a name="applicationcostprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler"></a>

```java
public java.lang.String getApplicationcostprofiler();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationcostprofiler AwsProvider#applicationcostprofiler}

---

##### `applicationdiscovery`<sup>Optional</sup> <a name="applicationdiscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery"></a>

```java
public java.lang.String getApplicationdiscovery();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscovery AwsProvider#applicationdiscovery}

---

##### `applicationdiscoveryservice`<sup>Optional</sup> <a name="applicationdiscoveryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice"></a>

```java
public java.lang.String getApplicationdiscoveryservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscoveryservice AwsProvider#applicationdiscoveryservice}

---

##### `applicationinsights`<sup>Optional</sup> <a name="applicationinsights" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights"></a>

```java
public java.lang.String getApplicationinsights();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationinsights AwsProvider#applicationinsights}

---

##### `appmesh`<sup>Optional</sup> <a name="appmesh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh"></a>

```java
public java.lang.String getAppmesh();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appmesh AwsProvider#appmesh}

---

##### `appregistry`<sup>Optional</sup> <a name="appregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry"></a>

```java
public java.lang.String getAppregistry();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appregistry AwsProvider#appregistry}

---

##### `apprunner`<sup>Optional</sup> <a name="apprunner" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner"></a>

```java
public java.lang.String getApprunner();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apprunner AwsProvider#apprunner}

---

##### `appstream`<sup>Optional</sup> <a name="appstream" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream"></a>

```java
public java.lang.String getAppstream();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appstream AwsProvider#appstream}

---

##### `appsync`<sup>Optional</sup> <a name="appsync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync"></a>

```java
public java.lang.String getAppsync();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appsync AwsProvider#appsync}

---

##### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena"></a>

```java
public java.lang.String getAthena();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#athena AwsProvider#athena}

---

##### `auditmanager`<sup>Optional</sup> <a name="auditmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager"></a>

```java
public java.lang.String getAuditmanager();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#auditmanager AwsProvider#auditmanager}

---

##### `augmentedairuntime`<sup>Optional</sup> <a name="augmentedairuntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime"></a>

```java
public java.lang.String getAugmentedairuntime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#augmentedairuntime AwsProvider#augmentedairuntime}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling"></a>

```java
public java.lang.String getAutoscaling();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscaling AwsProvider#autoscaling}

---

##### `autoscalingplans`<sup>Optional</sup> <a name="autoscalingplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans"></a>

```java
public java.lang.String getAutoscalingplans();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscalingplans AwsProvider#autoscalingplans}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup"></a>

```java
public java.lang.String getBackup();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backup AwsProvider#backup}

---

##### `backupgateway`<sup>Optional</sup> <a name="backupgateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway"></a>

```java
public java.lang.String getBackupgateway();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backupgateway AwsProvider#backupgateway}

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch"></a>

```java
public java.lang.String getBatch();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#batch AwsProvider#batch}

---

##### `beanstalk`<sup>Optional</sup> <a name="beanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk"></a>

```java
public java.lang.String getBeanstalk();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#beanstalk AwsProvider#beanstalk}

---

##### `billingconductor`<sup>Optional</sup> <a name="billingconductor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor"></a>

```java
public java.lang.String getBillingconductor();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#billingconductor AwsProvider#billingconductor}

---

##### `braket`<sup>Optional</sup> <a name="braket" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket"></a>

```java
public java.lang.String getBraket();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#braket AwsProvider#braket}

---

##### `budgets`<sup>Optional</sup> <a name="budgets" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets"></a>

```java
public java.lang.String getBudgets();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#budgets AwsProvider#budgets}

---

##### `ce`<sup>Optional</sup> <a name="ce" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce"></a>

```java
public java.lang.String getCe();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ce AwsProvider#ce}

---

##### `chime`<sup>Optional</sup> <a name="chime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime"></a>

```java
public java.lang.String getChime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chime AwsProvider#chime}

---

##### `chimesdkidentity`<sup>Optional</sup> <a name="chimesdkidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity"></a>

```java
public java.lang.String getChimesdkidentity();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkidentity AwsProvider#chimesdkidentity}

---

##### `chimesdkmeetings`<sup>Optional</sup> <a name="chimesdkmeetings" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings"></a>

```java
public java.lang.String getChimesdkmeetings();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmeetings AwsProvider#chimesdkmeetings}

---

##### `chimesdkmessaging`<sup>Optional</sup> <a name="chimesdkmessaging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging"></a>

```java
public java.lang.String getChimesdkmessaging();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmessaging AwsProvider#chimesdkmessaging}

---

##### `cloud9`<sup>Optional</sup> <a name="cloud9" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9"></a>

```java
public java.lang.String getCloud9();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloud9 AwsProvider#cloud9}

---

##### `cloudcontrol`<sup>Optional</sup> <a name="cloudcontrol" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol"></a>

```java
public java.lang.String getCloudcontrol();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrol AwsProvider#cloudcontrol}

---

##### `cloudcontrolapi`<sup>Optional</sup> <a name="cloudcontrolapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi"></a>

```java
public java.lang.String getCloudcontrolapi();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrolapi AwsProvider#cloudcontrolapi}

---

##### `clouddirectory`<sup>Optional</sup> <a name="clouddirectory" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory"></a>

```java
public java.lang.String getClouddirectory();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#clouddirectory AwsProvider#clouddirectory}

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation"></a>

```java
public java.lang.String getCloudformation();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudformation AwsProvider#cloudformation}

---

##### `cloudfront`<sup>Optional</sup> <a name="cloudfront" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront"></a>

```java
public java.lang.String getCloudfront();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudfront AwsProvider#cloudfront}

---

##### `cloudhsm`<sup>Optional</sup> <a name="cloudhsm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm"></a>

```java
public java.lang.String getCloudhsm();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsm AwsProvider#cloudhsm}

---

##### `cloudhsmv2`<sup>Optional</sup> <a name="cloudhsmv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2"></a>

```java
public java.lang.String getCloudhsmv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsmv2 AwsProvider#cloudhsmv2}

---

##### `cloudsearch`<sup>Optional</sup> <a name="cloudsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch"></a>

```java
public java.lang.String getCloudsearch();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearch AwsProvider#cloudsearch}

---

##### `cloudsearchdomain`<sup>Optional</sup> <a name="cloudsearchdomain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain"></a>

```java
public java.lang.String getCloudsearchdomain();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearchdomain AwsProvider#cloudsearchdomain}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail"></a>

```java
public java.lang.String getCloudtrail();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudtrail AwsProvider#cloudtrail}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch"></a>

```java
public java.lang.String getCloudwatch();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatch AwsProvider#cloudwatch}

---

##### `cloudwatchevents`<sup>Optional</sup> <a name="cloudwatchevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents"></a>

```java
public java.lang.String getCloudwatchevents();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevents AwsProvider#cloudwatchevents}

---

##### `cloudwatchevidently`<sup>Optional</sup> <a name="cloudwatchevidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently"></a>

```java
public java.lang.String getCloudwatchevidently();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevidently AwsProvider#cloudwatchevidently}

---

##### `cloudwatchlog`<sup>Optional</sup> <a name="cloudwatchlog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog"></a>

```java
public java.lang.String getCloudwatchlog();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlog AwsProvider#cloudwatchlog}

---

##### `cloudwatchlogs`<sup>Optional</sup> <a name="cloudwatchlogs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs"></a>

```java
public java.lang.String getCloudwatchlogs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlogs AwsProvider#cloudwatchlogs}

---

##### `cloudwatchobservabilityaccessmanager`<sup>Optional</sup> <a name="cloudwatchobservabilityaccessmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager"></a>

```java
public java.lang.String getCloudwatchobservabilityaccessmanager();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchobservabilityaccessmanager AwsProvider#cloudwatchobservabilityaccessmanager}

---

##### `cloudwatchrum`<sup>Optional</sup> <a name="cloudwatchrum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum"></a>

```java
public java.lang.String getCloudwatchrum();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchrum AwsProvider#cloudwatchrum}

---

##### `codeartifact`<sup>Optional</sup> <a name="codeartifact" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact"></a>

```java
public java.lang.String getCodeartifact();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeartifact AwsProvider#codeartifact}

---

##### `codebuild`<sup>Optional</sup> <a name="codebuild" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild"></a>

```java
public java.lang.String getCodebuild();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codebuild AwsProvider#codebuild}

---

##### `codecommit`<sup>Optional</sup> <a name="codecommit" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit"></a>

```java
public java.lang.String getCodecommit();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codecommit AwsProvider#codecommit}

---

##### `codedeploy`<sup>Optional</sup> <a name="codedeploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy"></a>

```java
public java.lang.String getCodedeploy();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codedeploy AwsProvider#codedeploy}

---

##### `codeguruprofiler`<sup>Optional</sup> <a name="codeguruprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler"></a>

```java
public java.lang.String getCodeguruprofiler();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeguruprofiler AwsProvider#codeguruprofiler}

---

##### `codegurureviewer`<sup>Optional</sup> <a name="codegurureviewer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer"></a>

```java
public java.lang.String getCodegurureviewer();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codegurureviewer AwsProvider#codegurureviewer}

---

##### `codepipeline`<sup>Optional</sup> <a name="codepipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline"></a>

```java
public java.lang.String getCodepipeline();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codepipeline AwsProvider#codepipeline}

---

##### `codestar`<sup>Optional</sup> <a name="codestar" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar"></a>

```java
public java.lang.String getCodestar();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestar AwsProvider#codestar}

---

##### `codestarconnections`<sup>Optional</sup> <a name="codestarconnections" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections"></a>

```java
public java.lang.String getCodestarconnections();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarconnections AwsProvider#codestarconnections}

---

##### `codestarnotifications`<sup>Optional</sup> <a name="codestarnotifications" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications"></a>

```java
public java.lang.String getCodestarnotifications();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarnotifications AwsProvider#codestarnotifications}

---

##### `cognitoidentity`<sup>Optional</sup> <a name="cognitoidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity"></a>

```java
public java.lang.String getCognitoidentity();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentity AwsProvider#cognitoidentity}

---

##### `cognitoidentityprovider`<sup>Optional</sup> <a name="cognitoidentityprovider" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider"></a>

```java
public java.lang.String getCognitoidentityprovider();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentityprovider AwsProvider#cognitoidentityprovider}

---

##### `cognitoidp`<sup>Optional</sup> <a name="cognitoidp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp"></a>

```java
public java.lang.String getCognitoidp();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidp AwsProvider#cognitoidp}

---

##### `cognitosync`<sup>Optional</sup> <a name="cognitosync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync"></a>

```java
public java.lang.String getCognitosync();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitosync AwsProvider#cognitosync}

---

##### `comprehend`<sup>Optional</sup> <a name="comprehend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend"></a>

```java
public java.lang.String getComprehend();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehend AwsProvider#comprehend}

---

##### `comprehendmedical`<sup>Optional</sup> <a name="comprehendmedical" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical"></a>

```java
public java.lang.String getComprehendmedical();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehendmedical AwsProvider#comprehendmedical}

---

##### `computeoptimizer`<sup>Optional</sup> <a name="computeoptimizer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer"></a>

```java
public java.lang.String getComputeoptimizer();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#computeoptimizer AwsProvider#computeoptimizer}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#config AwsProvider#config}

---

##### `configservice`<sup>Optional</sup> <a name="configservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice"></a>

```java
public java.lang.String getConfigservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#configservice AwsProvider#configservice}

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect"></a>

```java
public java.lang.String getConnect();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connect AwsProvider#connect}

---

##### `connectcontactlens`<sup>Optional</sup> <a name="connectcontactlens" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens"></a>

```java
public java.lang.String getConnectcontactlens();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectcontactlens AwsProvider#connectcontactlens}

---

##### `connectparticipant`<sup>Optional</sup> <a name="connectparticipant" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant"></a>

```java
public java.lang.String getConnectparticipant();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectparticipant AwsProvider#connectparticipant}

---

##### `connectwisdomservice`<sup>Optional</sup> <a name="connectwisdomservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice"></a>

```java
public java.lang.String getConnectwisdomservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectwisdomservice AwsProvider#connectwisdomservice}

---

##### `controltower`<sup>Optional</sup> <a name="controltower" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower"></a>

```java
public java.lang.String getControltower();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#controltower AwsProvider#controltower}

---

##### `costandusagereportservice`<sup>Optional</sup> <a name="costandusagereportservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice"></a>

```java
public java.lang.String getCostandusagereportservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costandusagereportservice AwsProvider#costandusagereportservice}

---

##### `costexplorer`<sup>Optional</sup> <a name="costexplorer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer"></a>

```java
public java.lang.String getCostexplorer();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costexplorer AwsProvider#costexplorer}

---

##### `cur`<sup>Optional</sup> <a name="cur" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur"></a>

```java
public java.lang.String getCur();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cur AwsProvider#cur}

---

##### `customerprofiles`<sup>Optional</sup> <a name="customerprofiles" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles"></a>

```java
public java.lang.String getCustomerprofiles();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#customerprofiles AwsProvider#customerprofiles}

---

##### `databasemigration`<sup>Optional</sup> <a name="databasemigration" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration"></a>

```java
public java.lang.String getDatabasemigration();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigration AwsProvider#databasemigration}

---

##### `databasemigrationservice`<sup>Optional</sup> <a name="databasemigrationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice"></a>

```java
public java.lang.String getDatabasemigrationservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigrationservice AwsProvider#databasemigrationservice}

---

##### `databrew`<sup>Optional</sup> <a name="databrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew"></a>

```java
public java.lang.String getDatabrew();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databrew AwsProvider#databrew}

---

##### `dataexchange`<sup>Optional</sup> <a name="dataexchange" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange"></a>

```java
public java.lang.String getDataexchange();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dataexchange AwsProvider#dataexchange}

---

##### `datapipeline`<sup>Optional</sup> <a name="datapipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline"></a>

```java
public java.lang.String getDatapipeline();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datapipeline AwsProvider#datapipeline}

---

##### `datasync`<sup>Optional</sup> <a name="datasync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync"></a>

```java
public java.lang.String getDatasync();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datasync AwsProvider#datasync}

---

##### `dax`<sup>Optional</sup> <a name="dax" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax"></a>

```java
public java.lang.String getDax();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dax AwsProvider#dax}

---

##### `deploy`<sup>Optional</sup> <a name="deploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy"></a>

```java
public java.lang.String getDeploy();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#deploy AwsProvider#deploy}

---

##### `detective`<sup>Optional</sup> <a name="detective" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective"></a>

```java
public java.lang.String getDetective();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#detective AwsProvider#detective}

---

##### `devicefarm`<sup>Optional</sup> <a name="devicefarm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm"></a>

```java
public java.lang.String getDevicefarm();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devicefarm AwsProvider#devicefarm}

---

##### `devopsguru`<sup>Optional</sup> <a name="devopsguru" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru"></a>

```java
public java.lang.String getDevopsguru();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devopsguru AwsProvider#devopsguru}

---

##### `directconnect`<sup>Optional</sup> <a name="directconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect"></a>

```java
public java.lang.String getDirectconnect();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directconnect AwsProvider#directconnect}

---

##### `directoryservice`<sup>Optional</sup> <a name="directoryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice"></a>

```java
public java.lang.String getDirectoryservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directoryservice AwsProvider#directoryservice}

---

##### `discovery`<sup>Optional</sup> <a name="discovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery"></a>

```java
public java.lang.String getDiscovery();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#discovery AwsProvider#discovery}

---

##### `dlm`<sup>Optional</sup> <a name="dlm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm"></a>

```java
public java.lang.String getDlm();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dlm AwsProvider#dlm}

---

##### `dms`<sup>Optional</sup> <a name="dms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms"></a>

```java
public java.lang.String getDms();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dms AwsProvider#dms}

---

##### `docdb`<sup>Optional</sup> <a name="docdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb"></a>

```java
public java.lang.String getDocdb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#docdb AwsProvider#docdb}

---

##### `drs`<sup>Optional</sup> <a name="drs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs"></a>

```java
public java.lang.String getDrs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#drs AwsProvider#drs}

---

##### `ds`<sup>Optional</sup> <a name="ds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds"></a>

```java
public java.lang.String getDs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ds AwsProvider#ds}

---

##### `dynamodb`<sup>Optional</sup> <a name="dynamodb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb"></a>

```java
public java.lang.String getDynamodb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodb AwsProvider#dynamodb}

---

##### `dynamodbstreams`<sup>Optional</sup> <a name="dynamodbstreams" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams"></a>

```java
public java.lang.String getDynamodbstreams();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodbstreams AwsProvider#dynamodbstreams}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs"></a>

```java
public java.lang.String getEbs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ebs AwsProvider#ebs}

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2"></a>

```java
public java.lang.String getEc2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2 AwsProvider#ec2}

---

##### `ec2Instanceconnect`<sup>Optional</sup> <a name="ec2Instanceconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect"></a>

```java
public java.lang.String getEc2Instanceconnect();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2instanceconnect AwsProvider#ec2instanceconnect}

---

##### `ecr`<sup>Optional</sup> <a name="ecr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr"></a>

```java
public java.lang.String getEcr();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecr AwsProvider#ecr}

---

##### `ecrpublic`<sup>Optional</sup> <a name="ecrpublic" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic"></a>

```java
public java.lang.String getEcrpublic();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecrpublic AwsProvider#ecrpublic}

---

##### `ecs`<sup>Optional</sup> <a name="ecs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs"></a>

```java
public java.lang.String getEcs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecs AwsProvider#ecs}

---

##### `efs`<sup>Optional</sup> <a name="efs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs"></a>

```java
public java.lang.String getEfs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#efs AwsProvider#efs}

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks"></a>

```java
public java.lang.String getEks();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eks AwsProvider#eks}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache"></a>

```java
public java.lang.String getElasticache();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticache AwsProvider#elasticache}

---

##### `elasticbeanstalk`<sup>Optional</sup> <a name="elasticbeanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk"></a>

```java
public java.lang.String getElasticbeanstalk();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticbeanstalk AwsProvider#elasticbeanstalk}

---

##### `elasticinference`<sup>Optional</sup> <a name="elasticinference" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference"></a>

```java
public java.lang.String getElasticinference();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticinference AwsProvider#elasticinference}

---

##### `elasticloadbalancing`<sup>Optional</sup> <a name="elasticloadbalancing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing"></a>

```java
public java.lang.String getElasticloadbalancing();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancing AwsProvider#elasticloadbalancing}

---

##### `elasticloadbalancingv2`<sup>Optional</sup> <a name="elasticloadbalancingv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2"></a>

```java
public java.lang.String getElasticloadbalancingv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancingv2 AwsProvider#elasticloadbalancingv2}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch"></a>

```java
public java.lang.String getElasticsearch();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearch AwsProvider#elasticsearch}

---

##### `elasticsearchservice`<sup>Optional</sup> <a name="elasticsearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice"></a>

```java
public java.lang.String getElasticsearchservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearchservice AwsProvider#elasticsearchservice}

---

##### `elastictranscoder`<sup>Optional</sup> <a name="elastictranscoder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder"></a>

```java
public java.lang.String getElastictranscoder();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elastictranscoder AwsProvider#elastictranscoder}

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb"></a>

```java
public java.lang.String getElb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elb AwsProvider#elb}

---

##### `elbv2`<sup>Optional</sup> <a name="elbv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2"></a>

```java
public java.lang.String getElbv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elbv2 AwsProvider#elbv2}

---

##### `emr`<sup>Optional</sup> <a name="emr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr"></a>

```java
public java.lang.String getEmr();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emr AwsProvider#emr}

---

##### `emrcontainers`<sup>Optional</sup> <a name="emrcontainers" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers"></a>

```java
public java.lang.String getEmrcontainers();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrcontainers AwsProvider#emrcontainers}

---

##### `emrserverless`<sup>Optional</sup> <a name="emrserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless"></a>

```java
public java.lang.String getEmrserverless();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrserverless AwsProvider#emrserverless}

---

##### `es`<sup>Optional</sup> <a name="es" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es"></a>

```java
public java.lang.String getEs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#es AwsProvider#es}

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge"></a>

```java
public java.lang.String getEventbridge();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eventbridge AwsProvider#eventbridge}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events"></a>

```java
public java.lang.String getEvents();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#events AwsProvider#events}

---

##### `evidently`<sup>Optional</sup> <a name="evidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently"></a>

```java
public java.lang.String getEvidently();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#evidently AwsProvider#evidently}

---

##### `finspace`<sup>Optional</sup> <a name="finspace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace"></a>

```java
public java.lang.String getFinspace();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspace AwsProvider#finspace}

---

##### `finspacedata`<sup>Optional</sup> <a name="finspacedata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata"></a>

```java
public java.lang.String getFinspacedata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspacedata AwsProvider#finspacedata}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose"></a>

```java
public java.lang.String getFirehose();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#firehose AwsProvider#firehose}

---

##### `fis`<sup>Optional</sup> <a name="fis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis"></a>

```java
public java.lang.String getFis();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fis AwsProvider#fis}

---

##### `fms`<sup>Optional</sup> <a name="fms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms"></a>

```java
public java.lang.String getFms();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fms AwsProvider#fms}

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast"></a>

```java
public java.lang.String getForecast();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecast AwsProvider#forecast}

---

##### `forecastquery`<sup>Optional</sup> <a name="forecastquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery"></a>

```java
public java.lang.String getForecastquery();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastquery AwsProvider#forecastquery}

---

##### `forecastqueryservice`<sup>Optional</sup> <a name="forecastqueryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice"></a>

```java
public java.lang.String getForecastqueryservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastqueryservice AwsProvider#forecastqueryservice}

---

##### `forecastservice`<sup>Optional</sup> <a name="forecastservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice"></a>

```java
public java.lang.String getForecastservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastservice AwsProvider#forecastservice}

---

##### `frauddetector`<sup>Optional</sup> <a name="frauddetector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector"></a>

```java
public java.lang.String getFrauddetector();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#frauddetector AwsProvider#frauddetector}

---

##### `fsx`<sup>Optional</sup> <a name="fsx" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx"></a>

```java
public java.lang.String getFsx();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fsx AwsProvider#fsx}

---

##### `gamelift`<sup>Optional</sup> <a name="gamelift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift"></a>

```java
public java.lang.String getGamelift();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gamelift AwsProvider#gamelift}

---

##### `glacier`<sup>Optional</sup> <a name="glacier" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier"></a>

```java
public java.lang.String getGlacier();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glacier AwsProvider#glacier}

---

##### `globalaccelerator`<sup>Optional</sup> <a name="globalaccelerator" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator"></a>

```java
public java.lang.String getGlobalaccelerator();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#globalaccelerator AwsProvider#globalaccelerator}

---

##### `glue`<sup>Optional</sup> <a name="glue" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue"></a>

```java
public java.lang.String getGlue();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glue AwsProvider#glue}

---

##### `gluedatabrew`<sup>Optional</sup> <a name="gluedatabrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew"></a>

```java
public java.lang.String getGluedatabrew();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gluedatabrew AwsProvider#gluedatabrew}

---

##### `grafana`<sup>Optional</sup> <a name="grafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana"></a>

```java
public java.lang.String getGrafana();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#grafana AwsProvider#grafana}

---

##### `greengrass`<sup>Optional</sup> <a name="greengrass" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass"></a>

```java
public java.lang.String getGreengrass();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrass AwsProvider#greengrass}

---

##### `greengrassv2`<sup>Optional</sup> <a name="greengrassv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2"></a>

```java
public java.lang.String getGreengrassv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrassv2 AwsProvider#greengrassv2}

---

##### `groundstation`<sup>Optional</sup> <a name="groundstation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation"></a>

```java
public java.lang.String getGroundstation();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#groundstation AwsProvider#groundstation}

---

##### `guardduty`<sup>Optional</sup> <a name="guardduty" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty"></a>

```java
public java.lang.String getGuardduty();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#guardduty AwsProvider#guardduty}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health"></a>

```java
public java.lang.String getHealth();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#health AwsProvider#health}

---

##### `healthlake`<sup>Optional</sup> <a name="healthlake" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake"></a>

```java
public java.lang.String getHealthlake();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#healthlake AwsProvider#healthlake}

---

##### `honeycode`<sup>Optional</sup> <a name="honeycode" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode"></a>

```java
public java.lang.String getHoneycode();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#honeycode AwsProvider#honeycode}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam"></a>

```java
public java.lang.String getIam();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iam AwsProvider#iam}

---

##### `identitystore`<sup>Optional</sup> <a name="identitystore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore"></a>

```java
public java.lang.String getIdentitystore();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#identitystore AwsProvider#identitystore}

---

##### `imagebuilder`<sup>Optional</sup> <a name="imagebuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder"></a>

```java
public java.lang.String getImagebuilder();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#imagebuilder AwsProvider#imagebuilder}

---

##### `inspector`<sup>Optional</sup> <a name="inspector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector"></a>

```java
public java.lang.String getInspector();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector AwsProvider#inspector}

---

##### `inspector2`<sup>Optional</sup> <a name="inspector2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2"></a>

```java
public java.lang.String getInspector2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector2 AwsProvider#inspector2}

---

##### `inspectorv2`<sup>Optional</sup> <a name="inspectorv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2"></a>

```java
public java.lang.String getInspectorv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspectorv2 AwsProvider#inspectorv2}

---

##### `iot`<sup>Optional</sup> <a name="iot" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot"></a>

```java
public java.lang.String getIot();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot AwsProvider#iot}

---

##### `iot1Clickdevices`<sup>Optional</sup> <a name="iot1Clickdevices" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices"></a>

```java
public java.lang.String getIot1Clickdevices();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevices AwsProvider#iot1clickdevices}

---

##### `iot1Clickdevicesservice`<sup>Optional</sup> <a name="iot1Clickdevicesservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice"></a>

```java
public java.lang.String getIot1Clickdevicesservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevicesservice AwsProvider#iot1clickdevicesservice}

---

##### `iot1Clickprojects`<sup>Optional</sup> <a name="iot1Clickprojects" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects"></a>

```java
public java.lang.String getIot1Clickprojects();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickprojects AwsProvider#iot1clickprojects}

---

##### `iotanalytics`<sup>Optional</sup> <a name="iotanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics"></a>

```java
public java.lang.String getIotanalytics();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotanalytics AwsProvider#iotanalytics}

---

##### `iotdata`<sup>Optional</sup> <a name="iotdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata"></a>

```java
public java.lang.String getIotdata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdata AwsProvider#iotdata}

---

##### `iotdataplane`<sup>Optional</sup> <a name="iotdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane"></a>

```java
public java.lang.String getIotdataplane();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdataplane AwsProvider#iotdataplane}

---

##### `iotdeviceadvisor`<sup>Optional</sup> <a name="iotdeviceadvisor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor"></a>

```java
public java.lang.String getIotdeviceadvisor();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdeviceadvisor AwsProvider#iotdeviceadvisor}

---

##### `iotevents`<sup>Optional</sup> <a name="iotevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents"></a>

```java
public java.lang.String getIotevents();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotevents AwsProvider#iotevents}

---

##### `ioteventsdata`<sup>Optional</sup> <a name="ioteventsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata"></a>

```java
public java.lang.String getIoteventsdata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ioteventsdata AwsProvider#ioteventsdata}

---

##### `iotfleethub`<sup>Optional</sup> <a name="iotfleethub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub"></a>

```java
public java.lang.String getIotfleethub();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotfleethub AwsProvider#iotfleethub}

---

##### `iotjobsdata`<sup>Optional</sup> <a name="iotjobsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata"></a>

```java
public java.lang.String getIotjobsdata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdata AwsProvider#iotjobsdata}

---

##### `iotjobsdataplane`<sup>Optional</sup> <a name="iotjobsdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane"></a>

```java
public java.lang.String getIotjobsdataplane();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdataplane AwsProvider#iotjobsdataplane}

---

##### `iotsecuretunneling`<sup>Optional</sup> <a name="iotsecuretunneling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling"></a>

```java
public java.lang.String getIotsecuretunneling();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsecuretunneling AwsProvider#iotsecuretunneling}

---

##### `iotsitewise`<sup>Optional</sup> <a name="iotsitewise" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise"></a>

```java
public java.lang.String getIotsitewise();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsitewise AwsProvider#iotsitewise}

---

##### `iotthingsgraph`<sup>Optional</sup> <a name="iotthingsgraph" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph"></a>

```java
public java.lang.String getIotthingsgraph();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotthingsgraph AwsProvider#iotthingsgraph}

---

##### `iottwinmaker`<sup>Optional</sup> <a name="iottwinmaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker"></a>

```java
public java.lang.String getIottwinmaker();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iottwinmaker AwsProvider#iottwinmaker}

---

##### `iotwireless`<sup>Optional</sup> <a name="iotwireless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless"></a>

```java
public java.lang.String getIotwireless();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotwireless AwsProvider#iotwireless}

---

##### `ivs`<sup>Optional</sup> <a name="ivs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs"></a>

```java
public java.lang.String getIvs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivs AwsProvider#ivs}

---

##### `ivschat`<sup>Optional</sup> <a name="ivschat" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat"></a>

```java
public java.lang.String getIvschat();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivschat AwsProvider#ivschat}

---

##### `kafka`<sup>Optional</sup> <a name="kafka" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka"></a>

```java
public java.lang.String getKafka();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafka AwsProvider#kafka}

---

##### `kafkaconnect`<sup>Optional</sup> <a name="kafkaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect"></a>

```java
public java.lang.String getKafkaconnect();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafkaconnect AwsProvider#kafkaconnect}

---

##### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra"></a>

```java
public java.lang.String getKendra();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kendra AwsProvider#kendra}

---

##### `keyspaces`<sup>Optional</sup> <a name="keyspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces"></a>

```java
public java.lang.String getKeyspaces();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keyspaces AwsProvider#keyspaces}

---

##### `kinesis`<sup>Optional</sup> <a name="kinesis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis"></a>

```java
public java.lang.String getKinesis();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesis AwsProvider#kinesis}

---

##### `kinesisanalytics`<sup>Optional</sup> <a name="kinesisanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics"></a>

```java
public java.lang.String getKinesisanalytics();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalytics AwsProvider#kinesisanalytics}

---

##### `kinesisanalyticsv2`<sup>Optional</sup> <a name="kinesisanalyticsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2"></a>

```java
public java.lang.String getKinesisanalyticsv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}

---

##### `kinesisvideo`<sup>Optional</sup> <a name="kinesisvideo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo"></a>

```java
public java.lang.String getKinesisvideo();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideo AwsProvider#kinesisvideo}

---

##### `kinesisvideoarchivedmedia`<sup>Optional</sup> <a name="kinesisvideoarchivedmedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia"></a>

```java
public java.lang.String getKinesisvideoarchivedmedia();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideoarchivedmedia AwsProvider#kinesisvideoarchivedmedia}

---

##### `kinesisvideomedia`<sup>Optional</sup> <a name="kinesisvideomedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia"></a>

```java
public java.lang.String getKinesisvideomedia();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideomedia AwsProvider#kinesisvideomedia}

---

##### `kinesisvideosignaling`<sup>Optional</sup> <a name="kinesisvideosignaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling"></a>

```java
public java.lang.String getKinesisvideosignaling();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignaling AwsProvider#kinesisvideosignaling}

---

##### `kinesisvideosignalingchannels`<sup>Optional</sup> <a name="kinesisvideosignalingchannels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels"></a>

```java
public java.lang.String getKinesisvideosignalingchannels();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignalingchannels AwsProvider#kinesisvideosignalingchannels}

---

##### `kms`<sup>Optional</sup> <a name="kms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms"></a>

```java
public java.lang.String getKms();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kms AwsProvider#kms}

---

##### `lakeformation`<sup>Optional</sup> <a name="lakeformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation"></a>

```java
public java.lang.String getLakeformation();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lakeformation AwsProvider#lakeformation}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda"></a>

```java
public java.lang.String getLambda();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lambda AwsProvider#lambda}

---

##### `lex`<sup>Optional</sup> <a name="lex" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex"></a>

```java
public java.lang.String getLex();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lex AwsProvider#lex}

---

##### `lexmodelbuilding`<sup>Optional</sup> <a name="lexmodelbuilding" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding"></a>

```java
public java.lang.String getLexmodelbuilding();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuilding AwsProvider#lexmodelbuilding}

---

##### `lexmodelbuildingservice`<sup>Optional</sup> <a name="lexmodelbuildingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice"></a>

```java
public java.lang.String getLexmodelbuildingservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}

---

##### `lexmodels`<sup>Optional</sup> <a name="lexmodels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels"></a>

```java
public java.lang.String getLexmodels();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodels AwsProvider#lexmodels}

---

##### `lexmodelsv2`<sup>Optional</sup> <a name="lexmodelsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2"></a>

```java
public java.lang.String getLexmodelsv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelsv2 AwsProvider#lexmodelsv2}

---

##### `lexruntime`<sup>Optional</sup> <a name="lexruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime"></a>

```java
public java.lang.String getLexruntime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntime AwsProvider#lexruntime}

---

##### `lexruntimeservice`<sup>Optional</sup> <a name="lexruntimeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice"></a>

```java
public java.lang.String getLexruntimeservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimeservice AwsProvider#lexruntimeservice}

---

##### `lexruntimev2`<sup>Optional</sup> <a name="lexruntimev2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2"></a>

```java
public java.lang.String getLexruntimev2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimev2 AwsProvider#lexruntimev2}

---

##### `lexv2Models`<sup>Optional</sup> <a name="lexv2Models" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models"></a>

```java
public java.lang.String getLexv2Models();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2models AwsProvider#lexv2models}

---

##### `lexv2Runtime`<sup>Optional</sup> <a name="lexv2Runtime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime"></a>

```java
public java.lang.String getLexv2Runtime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2runtime AwsProvider#lexv2runtime}

---

##### `licensemanager`<sup>Optional</sup> <a name="licensemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager"></a>

```java
public java.lang.String getLicensemanager();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#licensemanager AwsProvider#licensemanager}

---

##### `lightsail`<sup>Optional</sup> <a name="lightsail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail"></a>

```java
public java.lang.String getLightsail();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lightsail AwsProvider#lightsail}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#location AwsProvider#location}

---

##### `locationservice`<sup>Optional</sup> <a name="locationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice"></a>

```java
public java.lang.String getLocationservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#locationservice AwsProvider#locationservice}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs"></a>

```java
public java.lang.String getLogs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#logs AwsProvider#logs}

---

##### `lookoutequipment`<sup>Optional</sup> <a name="lookoutequipment" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment"></a>

```java
public java.lang.String getLookoutequipment();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutequipment AwsProvider#lookoutequipment}

---

##### `lookoutforvision`<sup>Optional</sup> <a name="lookoutforvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision"></a>

```java
public java.lang.String getLookoutforvision();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutforvision AwsProvider#lookoutforvision}

---

##### `lookoutmetrics`<sup>Optional</sup> <a name="lookoutmetrics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics"></a>

```java
public java.lang.String getLookoutmetrics();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutmetrics AwsProvider#lookoutmetrics}

---

##### `lookoutvision`<sup>Optional</sup> <a name="lookoutvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision"></a>

```java
public java.lang.String getLookoutvision();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutvision AwsProvider#lookoutvision}

---

##### `machinelearning`<sup>Optional</sup> <a name="machinelearning" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning"></a>

```java
public java.lang.String getMachinelearning();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#machinelearning AwsProvider#machinelearning}

---

##### `macie`<sup>Optional</sup> <a name="macie" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie"></a>

```java
public java.lang.String getMacie();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie AwsProvider#macie}

---

##### `macie2`<sup>Optional</sup> <a name="macie2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2"></a>

```java
public java.lang.String getMacie2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie2 AwsProvider#macie2}

---

##### `managedblockchain`<sup>Optional</sup> <a name="managedblockchain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain"></a>

```java
public java.lang.String getManagedblockchain();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedblockchain AwsProvider#managedblockchain}

---

##### `managedgrafana`<sup>Optional</sup> <a name="managedgrafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana"></a>

```java
public java.lang.String getManagedgrafana();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedgrafana AwsProvider#managedgrafana}

---

##### `marketplacecatalog`<sup>Optional</sup> <a name="marketplacecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog"></a>

```java
public java.lang.String getMarketplacecatalog();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecatalog AwsProvider#marketplacecatalog}

---

##### `marketplacecommerceanalytics`<sup>Optional</sup> <a name="marketplacecommerceanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics"></a>

```java
public java.lang.String getMarketplacecommerceanalytics();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecommerceanalytics AwsProvider#marketplacecommerceanalytics}

---

##### `marketplaceentitlement`<sup>Optional</sup> <a name="marketplaceentitlement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement"></a>

```java
public java.lang.String getMarketplaceentitlement();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlement AwsProvider#marketplaceentitlement}

---

##### `marketplaceentitlementservice`<sup>Optional</sup> <a name="marketplaceentitlementservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice"></a>

```java
public java.lang.String getMarketplaceentitlementservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlementservice AwsProvider#marketplaceentitlementservice}

---

##### `marketplacemetering`<sup>Optional</sup> <a name="marketplacemetering" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering"></a>

```java
public java.lang.String getMarketplacemetering();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacemetering AwsProvider#marketplacemetering}

---

##### `mediaconnect`<sup>Optional</sup> <a name="mediaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect"></a>

```java
public java.lang.String getMediaconnect();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconnect AwsProvider#mediaconnect}

---

##### `mediaconvert`<sup>Optional</sup> <a name="mediaconvert" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert"></a>

```java
public java.lang.String getMediaconvert();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconvert AwsProvider#mediaconvert}

---

##### `medialive`<sup>Optional</sup> <a name="medialive" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive"></a>

```java
public java.lang.String getMedialive();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#medialive AwsProvider#medialive}

---

##### `mediapackage`<sup>Optional</sup> <a name="mediapackage" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage"></a>

```java
public java.lang.String getMediapackage();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackage AwsProvider#mediapackage}

---

##### `mediapackagevod`<sup>Optional</sup> <a name="mediapackagevod" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod"></a>

```java
public java.lang.String getMediapackagevod();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackagevod AwsProvider#mediapackagevod}

---

##### `mediastore`<sup>Optional</sup> <a name="mediastore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore"></a>

```java
public java.lang.String getMediastore();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastore AwsProvider#mediastore}

---

##### `mediastoredata`<sup>Optional</sup> <a name="mediastoredata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata"></a>

```java
public java.lang.String getMediastoredata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastoredata AwsProvider#mediastoredata}

---

##### `mediatailor`<sup>Optional</sup> <a name="mediatailor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor"></a>

```java
public java.lang.String getMediatailor();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediatailor AwsProvider#mediatailor}

---

##### `memorydb`<sup>Optional</sup> <a name="memorydb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb"></a>

```java
public java.lang.String getMemorydb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#memorydb AwsProvider#memorydb}

---

##### `meteringmarketplace`<sup>Optional</sup> <a name="meteringmarketplace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace"></a>

```java
public java.lang.String getMeteringmarketplace();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#meteringmarketplace AwsProvider#meteringmarketplace}

---

##### `mgh`<sup>Optional</sup> <a name="mgh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh"></a>

```java
public java.lang.String getMgh();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgh AwsProvider#mgh}

---

##### `mgn`<sup>Optional</sup> <a name="mgn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn"></a>

```java
public java.lang.String getMgn();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgn AwsProvider#mgn}

---

##### `migrationhub`<sup>Optional</sup> <a name="migrationhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub"></a>

```java
public java.lang.String getMigrationhub();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhub AwsProvider#migrationhub}

---

##### `migrationhubconfig`<sup>Optional</sup> <a name="migrationhubconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig"></a>

```java
public java.lang.String getMigrationhubconfig();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubconfig AwsProvider#migrationhubconfig}

---

##### `migrationhubrefactorspaces`<sup>Optional</sup> <a name="migrationhubrefactorspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces"></a>

```java
public java.lang.String getMigrationhubrefactorspaces();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubrefactorspaces AwsProvider#migrationhubrefactorspaces}

---

##### `migrationhubstrategy`<sup>Optional</sup> <a name="migrationhubstrategy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy"></a>

```java
public java.lang.String getMigrationhubstrategy();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategy AwsProvider#migrationhubstrategy}

---

##### `migrationhubstrategyrecommendations`<sup>Optional</sup> <a name="migrationhubstrategyrecommendations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations"></a>

```java
public java.lang.String getMigrationhubstrategyrecommendations();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategyrecommendations AwsProvider#migrationhubstrategyrecommendations}

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile"></a>

```java
public java.lang.String getMobile();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mobile AwsProvider#mobile}

---

##### `mq`<sup>Optional</sup> <a name="mq" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq"></a>

```java
public java.lang.String getMq();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mq AwsProvider#mq}

---

##### `msk`<sup>Optional</sup> <a name="msk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk"></a>

```java
public java.lang.String getMsk();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#msk AwsProvider#msk}

---

##### `mturk`<sup>Optional</sup> <a name="mturk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk"></a>

```java
public java.lang.String getMturk();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mturk AwsProvider#mturk}

---

##### `mwaa`<sup>Optional</sup> <a name="mwaa" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa"></a>

```java
public java.lang.String getMwaa();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mwaa AwsProvider#mwaa}

---

##### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune"></a>

```java
public java.lang.String getNeptune();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#neptune AwsProvider#neptune}

---

##### `networkfirewall`<sup>Optional</sup> <a name="networkfirewall" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall"></a>

```java
public java.lang.String getNetworkfirewall();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkfirewall AwsProvider#networkfirewall}

---

##### `networkmanager`<sup>Optional</sup> <a name="networkmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager"></a>

```java
public java.lang.String getNetworkmanager();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkmanager AwsProvider#networkmanager}

---

##### `nimble`<sup>Optional</sup> <a name="nimble" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble"></a>

```java
public java.lang.String getNimble();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimble AwsProvider#nimble}

---

##### `nimblestudio`<sup>Optional</sup> <a name="nimblestudio" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio"></a>

```java
public java.lang.String getNimblestudio();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimblestudio AwsProvider#nimblestudio}

---

##### `oam`<sup>Optional</sup> <a name="oam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam"></a>

```java
public java.lang.String getOam();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#oam AwsProvider#oam}

---

##### `opensearch`<sup>Optional</sup> <a name="opensearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch"></a>

```java
public java.lang.String getOpensearch();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearch AwsProvider#opensearch}

---

##### `opensearchserverless`<sup>Optional</sup> <a name="opensearchserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless"></a>

```java
public java.lang.String getOpensearchserverless();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchserverless AwsProvider#opensearchserverless}

---

##### `opensearchservice`<sup>Optional</sup> <a name="opensearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice"></a>

```java
public java.lang.String getOpensearchservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchservice AwsProvider#opensearchservice}

---

##### `opsworks`<sup>Optional</sup> <a name="opsworks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks"></a>

```java
public java.lang.String getOpsworks();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworks AwsProvider#opsworks}

---

##### `opsworkscm`<sup>Optional</sup> <a name="opsworkscm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm"></a>

```java
public java.lang.String getOpsworkscm();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworkscm AwsProvider#opsworkscm}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations"></a>

```java
public java.lang.String getOrganizations();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#organizations AwsProvider#organizations}

---

##### `outposts`<sup>Optional</sup> <a name="outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts"></a>

```java
public java.lang.String getOutposts();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#outposts AwsProvider#outposts}

---

##### `panorama`<sup>Optional</sup> <a name="panorama" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama"></a>

```java
public java.lang.String getPanorama();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#panorama AwsProvider#panorama}

---

##### `personalize`<sup>Optional</sup> <a name="personalize" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize"></a>

```java
public java.lang.String getPersonalize();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalize AwsProvider#personalize}

---

##### `personalizeevents`<sup>Optional</sup> <a name="personalizeevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents"></a>

```java
public java.lang.String getPersonalizeevents();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeevents AwsProvider#personalizeevents}

---

##### `personalizeruntime`<sup>Optional</sup> <a name="personalizeruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime"></a>

```java
public java.lang.String getPersonalizeruntime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeruntime AwsProvider#personalizeruntime}

---

##### `pi`<sup>Optional</sup> <a name="pi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi"></a>

```java
public java.lang.String getPi();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pi AwsProvider#pi}

---

##### `pinpoint`<sup>Optional</sup> <a name="pinpoint" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint"></a>

```java
public java.lang.String getPinpoint();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpoint AwsProvider#pinpoint}

---

##### `pinpointemail`<sup>Optional</sup> <a name="pinpointemail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail"></a>

```java
public java.lang.String getPinpointemail();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointemail AwsProvider#pinpointemail}

---

##### `pinpointsmsvoice`<sup>Optional</sup> <a name="pinpointsmsvoice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice"></a>

```java
public java.lang.String getPinpointsmsvoice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointsmsvoice AwsProvider#pinpointsmsvoice}

---

##### `pipes`<sup>Optional</sup> <a name="pipes" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes"></a>

```java
public java.lang.String getPipes();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pipes AwsProvider#pipes}

---

##### `polly`<sup>Optional</sup> <a name="polly" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly"></a>

```java
public java.lang.String getPolly();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#polly AwsProvider#polly}

---

##### `pricing`<sup>Optional</sup> <a name="pricing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing"></a>

```java
public java.lang.String getPricing();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pricing AwsProvider#pricing}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus"></a>

```java
public java.lang.String getPrometheus();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheus AwsProvider#prometheus}

---

##### `prometheusservice`<sup>Optional</sup> <a name="prometheusservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice"></a>

```java
public java.lang.String getPrometheusservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheusservice AwsProvider#prometheusservice}

---

##### `proton`<sup>Optional</sup> <a name="proton" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton"></a>

```java
public java.lang.String getProton();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#proton AwsProvider#proton}

---

##### `qldb`<sup>Optional</sup> <a name="qldb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb"></a>

```java
public java.lang.String getQldb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldb AwsProvider#qldb}

---

##### `qldbsession`<sup>Optional</sup> <a name="qldbsession" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession"></a>

```java
public java.lang.String getQldbsession();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldbsession AwsProvider#qldbsession}

---

##### `quicksight`<sup>Optional</sup> <a name="quicksight" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight"></a>

```java
public java.lang.String getQuicksight();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#quicksight AwsProvider#quicksight}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram"></a>

```java
public java.lang.String getRam();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ram AwsProvider#ram}

---

##### `rbin`<sup>Optional</sup> <a name="rbin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin"></a>

```java
public java.lang.String getRbin();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rbin AwsProvider#rbin}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds"></a>

```java
public java.lang.String getRds();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rds AwsProvider#rds}

---

##### `rdsdata`<sup>Optional</sup> <a name="rdsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata"></a>

```java
public java.lang.String getRdsdata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdata AwsProvider#rdsdata}

---

##### `rdsdataservice`<sup>Optional</sup> <a name="rdsdataservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice"></a>

```java
public java.lang.String getRdsdataservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdataservice AwsProvider#rdsdataservice}

---

##### `recyclebin`<sup>Optional</sup> <a name="recyclebin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin"></a>

```java
public java.lang.String getRecyclebin();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#recyclebin AwsProvider#recyclebin}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift"></a>

```java
public java.lang.String getRedshift();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshift AwsProvider#redshift}

---

##### `redshiftdata`<sup>Optional</sup> <a name="redshiftdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata"></a>

```java
public java.lang.String getRedshiftdata();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdata AwsProvider#redshiftdata}

---

##### `redshiftdataapiservice`<sup>Optional</sup> <a name="redshiftdataapiservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice"></a>

```java
public java.lang.String getRedshiftdataapiservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdataapiservice AwsProvider#redshiftdataapiservice}

---

##### `redshiftserverless`<sup>Optional</sup> <a name="redshiftserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless"></a>

```java
public java.lang.String getRedshiftserverless();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftserverless AwsProvider#redshiftserverless}

---

##### `rekognition`<sup>Optional</sup> <a name="rekognition" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition"></a>

```java
public java.lang.String getRekognition();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rekognition AwsProvider#rekognition}

---

##### `resiliencehub`<sup>Optional</sup> <a name="resiliencehub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub"></a>

```java
public java.lang.String getResiliencehub();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resiliencehub AwsProvider#resiliencehub}

---

##### `resourceexplorer2`<sup>Optional</sup> <a name="resourceexplorer2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2"></a>

```java
public java.lang.String getResourceexplorer2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourceexplorer2 AwsProvider#resourceexplorer2}

---

##### `resourcegroups`<sup>Optional</sup> <a name="resourcegroups" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups"></a>

```java
public java.lang.String getResourcegroups();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroups AwsProvider#resourcegroups}

---

##### `resourcegroupstagging`<sup>Optional</sup> <a name="resourcegroupstagging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging"></a>

```java
public java.lang.String getResourcegroupstagging();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstagging AwsProvider#resourcegroupstagging}

---

##### `resourcegroupstaggingapi`<sup>Optional</sup> <a name="resourcegroupstaggingapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi"></a>

```java
public java.lang.String getResourcegroupstaggingapi();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}

---

##### `robomaker`<sup>Optional</sup> <a name="robomaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker"></a>

```java
public java.lang.String getRobomaker();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#robomaker AwsProvider#robomaker}

---

##### `rolesanywhere`<sup>Optional</sup> <a name="rolesanywhere" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere"></a>

```java
public java.lang.String getRolesanywhere();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rolesanywhere AwsProvider#rolesanywhere}

---

##### `route53`<sup>Optional</sup> <a name="route53" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53"></a>

```java
public java.lang.String getRoute53();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53 AwsProvider#route53}

---

##### `route53Domains`<sup>Optional</sup> <a name="route53Domains" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains"></a>

```java
public java.lang.String getRoute53Domains();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53domains AwsProvider#route53domains}

---

##### `route53Recoverycluster`<sup>Optional</sup> <a name="route53Recoverycluster" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster"></a>

```java
public java.lang.String getRoute53Recoverycluster();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycluster AwsProvider#route53recoverycluster}

---

##### `route53Recoverycontrolconfig`<sup>Optional</sup> <a name="route53Recoverycontrolconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig"></a>

```java
public java.lang.String getRoute53Recoverycontrolconfig();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}

---

##### `route53Recoveryreadiness`<sup>Optional</sup> <a name="route53Recoveryreadiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness"></a>

```java
public java.lang.String getRoute53Recoveryreadiness();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoveryreadiness AwsProvider#route53recoveryreadiness}

---

##### `route53Resolver`<sup>Optional</sup> <a name="route53Resolver" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver"></a>

```java
public java.lang.String getRoute53Resolver();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53resolver AwsProvider#route53resolver}

---

##### `rum`<sup>Optional</sup> <a name="rum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum"></a>

```java
public java.lang.String getRum();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rum AwsProvider#rum}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3 AwsProvider#s3}

---

##### `s3Api`<sup>Optional</sup> <a name="s3Api" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api"></a>

```java
public java.lang.String getS3Api();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3api AwsProvider#s3api}

---

##### `s3Control`<sup>Optional</sup> <a name="s3Control" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control"></a>

```java
public java.lang.String getS3Control();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3control AwsProvider#s3control}

---

##### `s3Outposts`<sup>Optional</sup> <a name="s3Outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts"></a>

```java
public java.lang.String getS3Outposts();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3outposts AwsProvider#s3outposts}

---

##### `sagemaker`<sup>Optional</sup> <a name="sagemaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker"></a>

```java
public java.lang.String getSagemaker();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemaker AwsProvider#sagemaker}

---

##### `sagemakera2Iruntime`<sup>Optional</sup> <a name="sagemakera2Iruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime"></a>

```java
public java.lang.String getSagemakera2Iruntime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakera2iruntime AwsProvider#sagemakera2iruntime}

---

##### `sagemakeredge`<sup>Optional</sup> <a name="sagemakeredge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge"></a>

```java
public java.lang.String getSagemakeredge();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredge AwsProvider#sagemakeredge}

---

##### `sagemakeredgemanager`<sup>Optional</sup> <a name="sagemakeredgemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager"></a>

```java
public java.lang.String getSagemakeredgemanager();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredgemanager AwsProvider#sagemakeredgemanager}

---

##### `sagemakerfeaturestoreruntime`<sup>Optional</sup> <a name="sagemakerfeaturestoreruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime"></a>

```java
public java.lang.String getSagemakerfeaturestoreruntime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerfeaturestoreruntime AwsProvider#sagemakerfeaturestoreruntime}

---

##### `sagemakerruntime`<sup>Optional</sup> <a name="sagemakerruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime"></a>

```java
public java.lang.String getSagemakerruntime();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerruntime AwsProvider#sagemakerruntime}

---

##### `savingsplans`<sup>Optional</sup> <a name="savingsplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans"></a>

```java
public java.lang.String getSavingsplans();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#savingsplans AwsProvider#savingsplans}

---

##### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler"></a>

```java
public java.lang.String getScheduler();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#scheduler AwsProvider#scheduler}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas"></a>

```java
public java.lang.String getSchemas();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#schemas AwsProvider#schemas}

---

##### `sdb`<sup>Optional</sup> <a name="sdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb"></a>

```java
public java.lang.String getSdb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sdb AwsProvider#sdb}

---

##### `secretsmanager`<sup>Optional</sup> <a name="secretsmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager"></a>

```java
public java.lang.String getSecretsmanager();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secretsmanager AwsProvider#secretsmanager}

---

##### `securityhub`<sup>Optional</sup> <a name="securityhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub"></a>

```java
public java.lang.String getSecurityhub();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#securityhub AwsProvider#securityhub}

---

##### `serverlessapplicationrepository`<sup>Optional</sup> <a name="serverlessapplicationrepository" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository"></a>

```java
public java.lang.String getServerlessapplicationrepository();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}

---

##### `serverlessapprepo`<sup>Optional</sup> <a name="serverlessapprepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo"></a>

```java
public java.lang.String getServerlessapprepo();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapprepo AwsProvider#serverlessapprepo}

---

##### `serverlessrepo`<sup>Optional</sup> <a name="serverlessrepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo"></a>

```java
public java.lang.String getServerlessrepo();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessrepo AwsProvider#serverlessrepo}

---

##### `servicecatalog`<sup>Optional</sup> <a name="servicecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog"></a>

```java
public java.lang.String getServicecatalog();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalog AwsProvider#servicecatalog}

---

##### `servicecatalogappregistry`<sup>Optional</sup> <a name="servicecatalogappregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry"></a>

```java
public java.lang.String getServicecatalogappregistry();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalogappregistry AwsProvider#servicecatalogappregistry}

---

##### `servicediscovery`<sup>Optional</sup> <a name="servicediscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery"></a>

```java
public java.lang.String getServicediscovery();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicediscovery AwsProvider#servicediscovery}

---

##### `servicequotas`<sup>Optional</sup> <a name="servicequotas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas"></a>

```java
public java.lang.String getServicequotas();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicequotas AwsProvider#servicequotas}

---

##### `ses`<sup>Optional</sup> <a name="ses" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses"></a>

```java
public java.lang.String getSes();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ses AwsProvider#ses}

---

##### `sesv2`<sup>Optional</sup> <a name="sesv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2"></a>

```java
public java.lang.String getSesv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sesv2 AwsProvider#sesv2}

---

##### `sfn`<sup>Optional</sup> <a name="sfn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn"></a>

```java
public java.lang.String getSfn();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sfn AwsProvider#sfn}

---

##### `shield`<sup>Optional</sup> <a name="shield" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield"></a>

```java
public java.lang.String getShield();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shield AwsProvider#shield}

---

##### `signer`<sup>Optional</sup> <a name="signer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer"></a>

```java
public java.lang.String getSigner();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#signer AwsProvider#signer}

---

##### `simpledb`<sup>Optional</sup> <a name="simpledb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb"></a>

```java
public java.lang.String getSimpledb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#simpledb AwsProvider#simpledb}

---

##### `sms`<sup>Optional</sup> <a name="sms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms"></a>

```java
public java.lang.String getSms();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sms AwsProvider#sms}

---

##### `snowball`<sup>Optional</sup> <a name="snowball" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball"></a>

```java
public java.lang.String getSnowball();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowball AwsProvider#snowball}

---

##### `snowdevicemanagement`<sup>Optional</sup> <a name="snowdevicemanagement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement"></a>

```java
public java.lang.String getSnowdevicemanagement();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowdevicemanagement AwsProvider#snowdevicemanagement}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns"></a>

```java
public java.lang.String getSns();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sns AwsProvider#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs"></a>

```java
public java.lang.String getSqs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sqs AwsProvider#sqs}

---

##### `ssm`<sup>Optional</sup> <a name="ssm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm"></a>

```java
public java.lang.String getSsm();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssm AwsProvider#ssm}

---

##### `ssmcontacts`<sup>Optional</sup> <a name="ssmcontacts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts"></a>

```java
public java.lang.String getSsmcontacts();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmcontacts AwsProvider#ssmcontacts}

---

##### `ssmincidents`<sup>Optional</sup> <a name="ssmincidents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents"></a>

```java
public java.lang.String getSsmincidents();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmincidents AwsProvider#ssmincidents}

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso"></a>

```java
public java.lang.String getSso();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sso AwsProvider#sso}

---

##### `ssoadmin`<sup>Optional</sup> <a name="ssoadmin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin"></a>

```java
public java.lang.String getSsoadmin();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssoadmin AwsProvider#ssoadmin}

---

##### `ssooidc`<sup>Optional</sup> <a name="ssooidc" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc"></a>

```java
public java.lang.String getSsooidc();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssooidc AwsProvider#ssooidc}

---

##### `stepfunctions`<sup>Optional</sup> <a name="stepfunctions" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions"></a>

```java
public java.lang.String getStepfunctions();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#stepfunctions AwsProvider#stepfunctions}

---

##### `storagegateway`<sup>Optional</sup> <a name="storagegateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway"></a>

```java
public java.lang.String getStoragegateway();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#storagegateway AwsProvider#storagegateway}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts"></a>

```java
public java.lang.String getSts();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts AwsProvider#sts}

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support"></a>

```java
public java.lang.String getSupport();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#support AwsProvider#support}

---

##### `swf`<sup>Optional</sup> <a name="swf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf"></a>

```java
public java.lang.String getSwf();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#swf AwsProvider#swf}

---

##### `synthetics`<sup>Optional</sup> <a name="synthetics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics"></a>

```java
public java.lang.String getSynthetics();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#synthetics AwsProvider#synthetics}

---

##### `textract`<sup>Optional</sup> <a name="textract" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract"></a>

```java
public java.lang.String getTextract();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#textract AwsProvider#textract}

---

##### `timestreamquery`<sup>Optional</sup> <a name="timestreamquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery"></a>

```java
public java.lang.String getTimestreamquery();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamquery AwsProvider#timestreamquery}

---

##### `timestreamwrite`<sup>Optional</sup> <a name="timestreamwrite" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite"></a>

```java
public java.lang.String getTimestreamwrite();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamwrite AwsProvider#timestreamwrite}

---

##### `transcribe`<sup>Optional</sup> <a name="transcribe" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe"></a>

```java
public java.lang.String getTranscribe();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribe AwsProvider#transcribe}

---

##### `transcribeservice`<sup>Optional</sup> <a name="transcribeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice"></a>

```java
public java.lang.String getTranscribeservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribeservice AwsProvider#transcribeservice}

---

##### `transcribestreaming`<sup>Optional</sup> <a name="transcribestreaming" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming"></a>

```java
public java.lang.String getTranscribestreaming();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreaming AwsProvider#transcribestreaming}

---

##### `transcribestreamingservice`<sup>Optional</sup> <a name="transcribestreamingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice"></a>

```java
public java.lang.String getTranscribestreamingservice();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreamingservice AwsProvider#transcribestreamingservice}

---

##### `transfer`<sup>Optional</sup> <a name="transfer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer"></a>

```java
public java.lang.String getTransfer();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transfer AwsProvider#transfer}

---

##### `translate`<sup>Optional</sup> <a name="translate" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate"></a>

```java
public java.lang.String getTranslate();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#translate AwsProvider#translate}

---

##### `voiceid`<sup>Optional</sup> <a name="voiceid" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid"></a>

```java
public java.lang.String getVoiceid();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#voiceid AwsProvider#voiceid}

---

##### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf"></a>

```java
public java.lang.String getWaf();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#waf AwsProvider#waf}

---

##### `wafregional`<sup>Optional</sup> <a name="wafregional" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional"></a>

```java
public java.lang.String getWafregional();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafregional AwsProvider#wafregional}

---

##### `wafv2`<sup>Optional</sup> <a name="wafv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2"></a>

```java
public java.lang.String getWafv2();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafv2 AwsProvider#wafv2}

---

##### `wellarchitected`<sup>Optional</sup> <a name="wellarchitected" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected"></a>

```java
public java.lang.String getWellarchitected();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wellarchitected AwsProvider#wellarchitected}

---

##### `wisdom`<sup>Optional</sup> <a name="wisdom" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom"></a>

```java
public java.lang.String getWisdom();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wisdom AwsProvider#wisdom}

---

##### `workdocs`<sup>Optional</sup> <a name="workdocs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs"></a>

```java
public java.lang.String getWorkdocs();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workdocs AwsProvider#workdocs}

---

##### `worklink`<sup>Optional</sup> <a name="worklink" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink"></a>

```java
public java.lang.String getWorklink();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#worklink AwsProvider#worklink}

---

##### `workmail`<sup>Optional</sup> <a name="workmail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail"></a>

```java
public java.lang.String getWorkmail();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmail AwsProvider#workmail}

---

##### `workmailmessageflow`<sup>Optional</sup> <a name="workmailmessageflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow"></a>

```java
public java.lang.String getWorkmailmessageflow();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmailmessageflow AwsProvider#workmailmessageflow}

---

##### `workspaces`<sup>Optional</sup> <a name="workspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces"></a>

```java
public java.lang.String getWorkspaces();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspaces AwsProvider#workspaces}

---

##### `workspacesweb`<sup>Optional</sup> <a name="workspacesweb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb"></a>

```java
public java.lang.String getWorkspacesweb();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspacesweb AwsProvider#workspacesweb}

---

##### `xray`<sup>Optional</sup> <a name="xray" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray"></a>

```java
public java.lang.String getXray();
```

- *Type:* java.lang.String

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#xray AwsProvider#xray}

---

### AwsProviderIgnoreTags <a name="AwsProviderIgnoreTags" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.provider.AwsProviderIgnoreTags;

AwsProviderIgnoreTags.builder()
//  .keyPrefixes(java.util.List<java.lang.String>)
//  .keys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes">keyPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Resource tag key prefixes to ignore across all resources. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys">keys</a></code> | <code>java.util.List<java.lang.String></code> | Resource tag keys to ignore across all resources. |

---

##### `keyPrefixes`<sup>Optional</sup> <a name="keyPrefixes" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes"></a>

```java
public java.util.List<java.lang.String> getKeyPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Resource tag key prefixes to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#key_prefixes AwsProvider#key_prefixes}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys"></a>

```java
public java.util.List<java.lang.String> getKeys();
```

- *Type:* java.util.List<java.lang.String>

Resource tag keys to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keys AwsProvider#keys}

---



