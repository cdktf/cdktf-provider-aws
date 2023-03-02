# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-aws.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsProvider <a name="AwsProvider" id="@cdktf/provider-aws.provider.AwsProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.provider.AwsProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProvider(
  scope: Construct,
  id: str,
  access_key: str = None,
  alias: str = None,
  allowed_account_ids: typing.List[str] = None,
  assume_role: typing.Union[IResolvable, typing.List[AwsProviderAssumeRole]] = None,
  assume_role_with_web_identity: typing.Union[IResolvable, typing.List[AwsProviderAssumeRoleWithWebIdentity]] = None,
  custom_ca_bundle: str = None,
  default_tags: typing.Union[IResolvable, typing.List[AwsProviderDefaultTags]] = None,
  ec2_metadata_service_endpoint: str = None,
  ec2_metadata_service_endpoint_mode: str = None,
  endpoints: typing.Union[IResolvable, typing.List[AwsProviderEndpoints]] = None,
  forbidden_account_ids: typing.List[str] = None,
  http_proxy: str = None,
  ignore_tags: typing.Union[IResolvable, typing.List[AwsProviderIgnoreTags]] = None,
  insecure: typing.Union[bool, IResolvable] = None,
  max_retries: typing.Union[int, float] = None,
  profile: str = None,
  region: str = None,
  s3_force_path_style: typing.Union[bool, IResolvable] = None,
  s3_use_path_style: typing.Union[bool, IResolvable] = None,
  secret_key: str = None,
  shared_config_files: typing.List[str] = None,
  shared_credentials_file: str = None,
  shared_credentials_files: typing.List[str] = None,
  skip_credentials_validation: typing.Union[bool, IResolvable] = None,
  skip_get_ec2_platforms: typing.Union[bool, IResolvable] = None,
  skip_metadata_api_check: str = None,
  skip_region_validation: typing.Union[bool, IResolvable] = None,
  skip_requesting_account_id: typing.Union[bool, IResolvable] = None,
  sts_region: str = None,
  token: str = None,
  use_dualstack_endpoint: typing.Union[bool, IResolvable] = None,
  use_fips_endpoint: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.allowedAccountIds">allowed_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRole">assume_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]</code> | assume_role block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]</code> | assume_role_with_web_identity block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.customCaBundle">custom_ca_bundle</a></code> | <code>str</code> | File containing custom root and intermediate certificates. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.defaultTags">default_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]</code> | default_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpoint">ec2_metadata_service_endpoint</a></code> | <code>str</code> | Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpointMode">ec2_metadata_service_endpoint_mode</a></code> | <code>str</code> | Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.endpoints">endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.forbiddenAccountIds">forbidden_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.httpProxy">http_proxy</a></code> | <code>str</code> | The address of an HTTP proxy to use when accessing the AWS API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ignoreTags">ignore_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]</code> | ignore_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times an AWS API request is being executed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.profile">profile</a></code> | <code>str</code> | The profile for API operations. If not set, the default profile created with `aws configure` will be used. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3ForcePathStyle">s3_force_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3UsePathStyle">s3_use_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | List of paths to shared config files. If not set, defaults to [~/.aws/config]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFile">shared_credentials_file</a></code> | <code>str</code> | The path to the shared credentials file. If not set, defaults to ~/.aws/credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipCredentialsValidation">skip_credentials_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipGetEc2Platforms">skip_get_ec2_platforms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>str</code> | Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRegionValidation">skip_region_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip static validation of region name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRequestingAccountId">skip_requesting_account_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.stsRegion">sts_region</a></code> | <code>str</code> | The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | session token. A session token is only required if you are using temporary security credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useDualstackEndpoint">use_dualstack_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Resolve an endpoint with DualStack capability. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useFipsEndpoint">use_fips_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Resolve an endpoint with FIPS capability. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.accessKey"></a>

- *Type:* str

The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}

---

##### `allowed_account_ids`<sup>Optional</sup> <a name="allowed_account_ids" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.allowedAccountIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}.

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRole"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]

assume_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.assumeRoleWithWebIdentity"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]

assume_role_with_web_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}

---

##### `custom_ca_bundle`<sup>Optional</sup> <a name="custom_ca_bundle" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.customCaBundle"></a>

- *Type:* str

File containing custom root and intermediate certificates.

Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#custom_ca_bundle AwsProvider#custom_ca_bundle}

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.defaultTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]

default_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}

---

##### `ec2_metadata_service_endpoint`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpoint"></a>

- *Type:* str

Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}

---

##### `ec2_metadata_service_endpoint_mode`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint_mode" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ec2MetadataServiceEndpointMode"></a>

- *Type:* str

Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.endpoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]

endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}

---

##### `forbidden_account_ids`<sup>Optional</sup> <a name="forbidden_account_ids" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.forbiddenAccountIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}.

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.httpProxy"></a>

- *Type:* str

The address of an HTTP proxy to use when accessing the AWS API.

Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#http_proxy AwsProvider#http_proxy}

---

##### `ignore_tags`<sup>Optional</sup> <a name="ignore_tags" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.ignoreTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]

ignore_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

The maximum number of times an AWS API request is being executed.

If the API request still fails, an error is
thrown.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.profile"></a>

- *Type:* str

The profile for API operations. If not set, the default profile created with `aws configure` will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.region"></a>

- *Type:* str

The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}

---

##### `s3_force_path_style`<sup>Optional</sup> <a name="s3_force_path_style" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3ForcePathStyle"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}

---

##### `s3_use_path_style`<sup>Optional</sup> <a name="s3_use_path_style" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.s3UsePathStyle"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_use_path_style AwsProvider#s3_use_path_style}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.secretKey"></a>

- *Type:* str

The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedConfigFiles"></a>

- *Type:* typing.List[str]

List of paths to shared config files. If not set, defaults to [~/.aws/config].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_config_files AwsProvider#shared_config_files}

---

##### `shared_credentials_file`<sup>Optional</sup> <a name="shared_credentials_file" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFile"></a>

- *Type:* str

The path to the shared credentials file. If not set, defaults to ~/.aws/credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.sharedCredentialsFiles"></a>

- *Type:* typing.List[str]

List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_files AwsProvider#shared_credentials_files}

---

##### `skip_credentials_validation`<sup>Optional</sup> <a name="skip_credentials_validation" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipCredentialsValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}

---

##### `skip_get_ec2_platforms`<sup>Optional</sup> <a name="skip_get_ec2_platforms" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipGetEc2Platforms"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipMetadataApiCheck"></a>

- *Type:* str

Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}

---

##### `skip_region_validation`<sup>Optional</sup> <a name="skip_region_validation" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRegionValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip static validation of region name.

Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}

---

##### `skip_requesting_account_id`<sup>Optional</sup> <a name="skip_requesting_account_id" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.skipRequestingAccountId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}

---

##### `sts_region`<sup>Optional</sup> <a name="sts_region" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.stsRegion"></a>

- *Type:* str

The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts_region AwsProvider#sts_region}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.token"></a>

- *Type:* str

session token. A session token is only required if you are using temporary security credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}

---

##### `use_dualstack_endpoint`<sup>Optional</sup> <a name="use_dualstack_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useDualstackEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Resolve an endpoint with DualStack capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}

---

##### `use_fips_endpoint`<sup>Optional</sup> <a name="use_fips_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.Initializer.parameter.useFipsEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Resolve an endpoint with FIPS capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_fips_endpoint AwsProvider#use_fips_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds">reset_allowed_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole">reset_assume_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity">reset_assume_role_with_web_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle">reset_custom_ca_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags">reset_default_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint">reset_ec2_metadata_service_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode">reset_ec2_metadata_service_endpoint_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetEndpoints">reset_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds">reset_forbidden_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy">reset_http_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags">reset_ignore_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle">reset_s3_force_path_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle">reset_s3_use_path_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSecretKey">reset_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles">reset_shared_config_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile">reset_shared_credentials_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles">reset_shared_credentials_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation">reset_skip_credentials_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms">reset_skip_get_ec2_platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck">reset_skip_metadata_api_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation">reset_skip_region_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId">reset_skip_requesting_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetStsRegion">reset_sts_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint">reset_use_dualstack_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint">reset_use_fips_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.provider.AwsProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.provider.AwsProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.provider.AwsProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.provider.AwsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.provider.AwsProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.provider.AwsProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.provider.AwsProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_key` <a name="reset_access_key" id="@cdktf/provider-aws.provider.AwsProvider.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-aws.provider.AwsProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_allowed_account_ids` <a name="reset_allowed_account_ids" id="@cdktf/provider-aws.provider.AwsProvider.resetAllowedAccountIds"></a>

```python
def reset_allowed_account_ids() -> None
```

##### `reset_assume_role` <a name="reset_assume_role" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRole"></a>

```python
def reset_assume_role() -> None
```

##### `reset_assume_role_with_web_identity` <a name="reset_assume_role_with_web_identity" id="@cdktf/provider-aws.provider.AwsProvider.resetAssumeRoleWithWebIdentity"></a>

```python
def reset_assume_role_with_web_identity() -> None
```

##### `reset_custom_ca_bundle` <a name="reset_custom_ca_bundle" id="@cdktf/provider-aws.provider.AwsProvider.resetCustomCaBundle"></a>

```python
def reset_custom_ca_bundle() -> None
```

##### `reset_default_tags` <a name="reset_default_tags" id="@cdktf/provider-aws.provider.AwsProvider.resetDefaultTags"></a>

```python
def reset_default_tags() -> None
```

##### `reset_ec2_metadata_service_endpoint` <a name="reset_ec2_metadata_service_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpoint"></a>

```python
def reset_ec2_metadata_service_endpoint() -> None
```

##### `reset_ec2_metadata_service_endpoint_mode` <a name="reset_ec2_metadata_service_endpoint_mode" id="@cdktf/provider-aws.provider.AwsProvider.resetEc2MetadataServiceEndpointMode"></a>

```python
def reset_ec2_metadata_service_endpoint_mode() -> None
```

##### `reset_endpoints` <a name="reset_endpoints" id="@cdktf/provider-aws.provider.AwsProvider.resetEndpoints"></a>

```python
def reset_endpoints() -> None
```

##### `reset_forbidden_account_ids` <a name="reset_forbidden_account_ids" id="@cdktf/provider-aws.provider.AwsProvider.resetForbiddenAccountIds"></a>

```python
def reset_forbidden_account_ids() -> None
```

##### `reset_http_proxy` <a name="reset_http_proxy" id="@cdktf/provider-aws.provider.AwsProvider.resetHttpProxy"></a>

```python
def reset_http_proxy() -> None
```

##### `reset_ignore_tags` <a name="reset_ignore_tags" id="@cdktf/provider-aws.provider.AwsProvider.resetIgnoreTags"></a>

```python
def reset_ignore_tags() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-aws.provider.AwsProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-aws.provider.AwsProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-aws.provider.AwsProvider.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.provider.AwsProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_s3_force_path_style` <a name="reset_s3_force_path_style" id="@cdktf/provider-aws.provider.AwsProvider.resetS3ForcePathStyle"></a>

```python
def reset_s3_force_path_style() -> None
```

##### `reset_s3_use_path_style` <a name="reset_s3_use_path_style" id="@cdktf/provider-aws.provider.AwsProvider.resetS3UsePathStyle"></a>

```python
def reset_s3_use_path_style() -> None
```

##### `reset_secret_key` <a name="reset_secret_key" id="@cdktf/provider-aws.provider.AwsProvider.resetSecretKey"></a>

```python
def reset_secret_key() -> None
```

##### `reset_shared_config_files` <a name="reset_shared_config_files" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedConfigFiles"></a>

```python
def reset_shared_config_files() -> None
```

##### `reset_shared_credentials_file` <a name="reset_shared_credentials_file" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFile"></a>

```python
def reset_shared_credentials_file() -> None
```

##### `reset_shared_credentials_files` <a name="reset_shared_credentials_files" id="@cdktf/provider-aws.provider.AwsProvider.resetSharedCredentialsFiles"></a>

```python
def reset_shared_credentials_files() -> None
```

##### `reset_skip_credentials_validation` <a name="reset_skip_credentials_validation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipCredentialsValidation"></a>

```python
def reset_skip_credentials_validation() -> None
```

##### `reset_skip_get_ec2_platforms` <a name="reset_skip_get_ec2_platforms" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipGetEc2Platforms"></a>

```python
def reset_skip_get_ec2_platforms() -> None
```

##### `reset_skip_metadata_api_check` <a name="reset_skip_metadata_api_check" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipMetadataApiCheck"></a>

```python
def reset_skip_metadata_api_check() -> None
```

##### `reset_skip_region_validation` <a name="reset_skip_region_validation" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRegionValidation"></a>

```python
def reset_skip_region_validation() -> None
```

##### `reset_skip_requesting_account_id` <a name="reset_skip_requesting_account_id" id="@cdktf/provider-aws.provider.AwsProvider.resetSkipRequestingAccountId"></a>

```python
def reset_skip_requesting_account_id() -> None
```

##### `reset_sts_region` <a name="reset_sts_region" id="@cdktf/provider-aws.provider.AwsProvider.resetStsRegion"></a>

```python
def reset_sts_region() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-aws.provider.AwsProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_use_dualstack_endpoint` <a name="reset_use_dualstack_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseDualstackEndpoint"></a>

```python
def reset_use_dualstack_endpoint() -> None
```

##### `reset_use_fips_endpoint` <a name="reset_use_fips_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.resetUseFipsEndpoint"></a>

```python
def reset_use_fips_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.provider.AwsProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.provider.AwsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput">allowed_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput">assume_role_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput">assume_role_with_web_identity_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput">custom_ca_bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput">default_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput">ec2_metadata_service_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput">ec2_metadata_service_endpoint_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput">endpoints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput">forbidden_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput">http_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput">ignore_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput">s3_force_path_style_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput">s3_use_path_style_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput">shared_config_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput">shared_credentials_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput">shared_credentials_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput">skip_credentials_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput">skip_get_ec2_platforms_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput">skip_metadata_api_check_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput">skip_region_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput">skip_requesting_account_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput">sts_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput">use_dualstack_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput">use_fips_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds">allowed_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRole">assume_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle">custom_ca_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.defaultTags">default_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint">ec2_metadata_service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode">ec2_metadata_service_endpoint_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.endpoints">endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds">forbidden_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.httpProxy">http_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags">ignore_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle">s3_force_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle">s3_use_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile">shared_credentials_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation">skip_credentials_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms">skip_get_ec2_platforms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation">skip_region_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId">skip_requesting_account_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.stsRegion">sts_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint">use_dualstack_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint">use_fips_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.provider.AwsProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.provider.AwsProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.provider.AwsProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.provider.AwsProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-aws.provider.AwsProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-aws.provider.AwsProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-aws.provider.AwsProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `allowed_account_ids_input`<sup>Optional</sup> <a name="allowed_account_ids_input" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIdsInput"></a>

```python
allowed_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assume_role_input`<sup>Optional</sup> <a name="assume_role_input" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleInput"></a>

```python
assume_role_input: typing.Union[IResolvable, typing.List[AwsProviderAssumeRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]

---

##### `assume_role_with_web_identity_input`<sup>Optional</sup> <a name="assume_role_with_web_identity_input" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentityInput"></a>

```python
assume_role_with_web_identity_input: typing.Union[IResolvable, typing.List[AwsProviderAssumeRoleWithWebIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]

---

##### `custom_ca_bundle_input`<sup>Optional</sup> <a name="custom_ca_bundle_input" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundleInput"></a>

```python
custom_ca_bundle_input: str
```

- *Type:* str

---

##### `default_tags_input`<sup>Optional</sup> <a name="default_tags_input" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTagsInput"></a>

```python
default_tags_input: typing.Union[IResolvable, typing.List[AwsProviderDefaultTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]

---

##### `ec2_metadata_service_endpoint_input`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint_input" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointInput"></a>

```python
ec2_metadata_service_endpoint_input: str
```

- *Type:* str

---

##### `ec2_metadata_service_endpoint_mode_input`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint_mode_input" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointModeInput"></a>

```python
ec2_metadata_service_endpoint_mode_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktf/provider-aws.provider.AwsProvider.property.endpointsInput"></a>

```python
endpoints_input: typing.Union[IResolvable, typing.List[AwsProviderEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]

---

##### `forbidden_account_ids_input`<sup>Optional</sup> <a name="forbidden_account_ids_input" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIdsInput"></a>

```python
forbidden_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_proxy_input`<sup>Optional</sup> <a name="http_proxy_input" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxyInput"></a>

```python
http_proxy_input: str
```

- *Type:* str

---

##### `ignore_tags_input`<sup>Optional</sup> <a name="ignore_tags_input" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTagsInput"></a>

```python
ignore_tags_input: typing.Union[IResolvable, typing.List[AwsProviderIgnoreTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-aws.provider.AwsProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-aws.provider.AwsProvider.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.provider.AwsProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `s3_force_path_style_input`<sup>Optional</sup> <a name="s3_force_path_style_input" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyleInput"></a>

```python
s3_force_path_style_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `s3_use_path_style_input`<sup>Optional</sup> <a name="s3_use_path_style_input" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyleInput"></a>

```python
s3_use_path_style_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `shared_config_files_input`<sup>Optional</sup> <a name="shared_config_files_input" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFilesInput"></a>

```python
shared_config_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_credentials_file_input`<sup>Optional</sup> <a name="shared_credentials_file_input" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFileInput"></a>

```python
shared_credentials_file_input: str
```

- *Type:* str

---

##### `shared_credentials_files_input`<sup>Optional</sup> <a name="shared_credentials_files_input" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFilesInput"></a>

```python
shared_credentials_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_credentials_validation_input`<sup>Optional</sup> <a name="skip_credentials_validation_input" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidationInput"></a>

```python
skip_credentials_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_get_ec2_platforms_input`<sup>Optional</sup> <a name="skip_get_ec2_platforms_input" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2PlatformsInput"></a>

```python
skip_get_ec2_platforms_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_metadata_api_check_input`<sup>Optional</sup> <a name="skip_metadata_api_check_input" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheckInput"></a>

```python
skip_metadata_api_check_input: str
```

- *Type:* str

---

##### `skip_region_validation_input`<sup>Optional</sup> <a name="skip_region_validation_input" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidationInput"></a>

```python
skip_region_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_requesting_account_id_input`<sup>Optional</sup> <a name="skip_requesting_account_id_input" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountIdInput"></a>

```python
skip_requesting_account_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sts_region_input`<sup>Optional</sup> <a name="sts_region_input" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegionInput"></a>

```python
sts_region_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-aws.provider.AwsProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `use_dualstack_endpoint_input`<sup>Optional</sup> <a name="use_dualstack_endpoint_input" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpointInput"></a>

```python
use_dualstack_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_fips_endpoint_input`<sup>Optional</sup> <a name="use_fips_endpoint_input" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpointInput"></a>

```python
use_fips_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-aws.provider.AwsProvider.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `allowed_account_ids`<sup>Optional</sup> <a name="allowed_account_ids" id="@cdktf/provider-aws.provider.AwsProvider.property.allowedAccountIds"></a>

```python
allowed_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRole"></a>

```python
assume_role: typing.Union[IResolvable, typing.List[AwsProviderAssumeRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktf/provider-aws.provider.AwsProvider.property.assumeRoleWithWebIdentity"></a>

```python
assume_role_with_web_identity: typing.Union[IResolvable, typing.List[AwsProviderAssumeRoleWithWebIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]

---

##### `custom_ca_bundle`<sup>Optional</sup> <a name="custom_ca_bundle" id="@cdktf/provider-aws.provider.AwsProvider.property.customCaBundle"></a>

```python
custom_ca_bundle: str
```

- *Type:* str

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktf/provider-aws.provider.AwsProvider.property.defaultTags"></a>

```python
default_tags: typing.Union[IResolvable, typing.List[AwsProviderDefaultTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]

---

##### `ec2_metadata_service_endpoint`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpoint"></a>

```python
ec2_metadata_service_endpoint: str
```

- *Type:* str

---

##### `ec2_metadata_service_endpoint_mode`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint_mode" id="@cdktf/provider-aws.provider.AwsProvider.property.ec2MetadataServiceEndpointMode"></a>

```python
ec2_metadata_service_endpoint_mode: str
```

- *Type:* str

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProvider.property.endpoints"></a>

```python
endpoints: typing.Union[IResolvable, typing.List[AwsProviderEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]

---

##### `forbidden_account_ids`<sup>Optional</sup> <a name="forbidden_account_ids" id="@cdktf/provider-aws.provider.AwsProvider.property.forbiddenAccountIds"></a>

```python
forbidden_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktf/provider-aws.provider.AwsProvider.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

---

##### `ignore_tags`<sup>Optional</sup> <a name="ignore_tags" id="@cdktf/provider-aws.provider.AwsProvider.property.ignoreTags"></a>

```python
ignore_tags: typing.Union[IResolvable, typing.List[AwsProviderIgnoreTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-aws.provider.AwsProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProvider.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `s3_force_path_style`<sup>Optional</sup> <a name="s3_force_path_style" id="@cdktf/provider-aws.provider.AwsProvider.property.s3ForcePathStyle"></a>

```python
s3_force_path_style: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `s3_use_path_style`<sup>Optional</sup> <a name="s3_use_path_style" id="@cdktf/provider-aws.provider.AwsProvider.property.s3UsePathStyle"></a>

```python
s3_use_path_style: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-aws.provider.AwsProvider.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedConfigFiles"></a>

```python
shared_config_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_credentials_file`<sup>Optional</sup> <a name="shared_credentials_file" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFile"></a>

```python
shared_credentials_file: str
```

- *Type:* str

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktf/provider-aws.provider.AwsProvider.property.sharedCredentialsFiles"></a>

```python
shared_credentials_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_credentials_validation`<sup>Optional</sup> <a name="skip_credentials_validation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipCredentialsValidation"></a>

```python
skip_credentials_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_get_ec2_platforms`<sup>Optional</sup> <a name="skip_get_ec2_platforms" id="@cdktf/provider-aws.provider.AwsProvider.property.skipGetEc2Platforms"></a>

```python
skip_get_ec2_platforms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktf/provider-aws.provider.AwsProvider.property.skipMetadataApiCheck"></a>

```python
skip_metadata_api_check: str
```

- *Type:* str

---

##### `skip_region_validation`<sup>Optional</sup> <a name="skip_region_validation" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRegionValidation"></a>

```python
skip_region_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_requesting_account_id`<sup>Optional</sup> <a name="skip_requesting_account_id" id="@cdktf/provider-aws.provider.AwsProvider.property.skipRequestingAccountId"></a>

```python
skip_requesting_account_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sts_region`<sup>Optional</sup> <a name="sts_region" id="@cdktf/provider-aws.provider.AwsProvider.property.stsRegion"></a>

```python
sts_region: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `use_dualstack_endpoint`<sup>Optional</sup> <a name="use_dualstack_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useDualstackEndpoint"></a>

```python
use_dualstack_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_fips_endpoint`<sup>Optional</sup> <a name="use_fips_endpoint" id="@cdktf/provider-aws.provider.AwsProvider.property.useFipsEndpoint"></a>

```python
use_fips_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.provider.AwsProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsProviderAssumeRole <a name="AwsProviderAssumeRole" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProviderAssumeRole(
  duration: str = None,
  duration_seconds: typing.Union[int, float] = None,
  external_id: str = None,
  policy: str = None,
  policy_arns: typing.List[str] = None,
  role_arn: str = None,
  session_name: str = None,
  source_identity: str = None,
  tags: typing.Mapping[str] = None,
  transitive_tag_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration">duration</a></code> | <code>str</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId">external_id</a></code> | <code>str</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy">policy</a></code> | <code>str</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn">role_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName">session_name</a></code> | <code>str</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity">source_identity</a></code> | <code>str</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys">transitive_tag_keys</a></code> | <code>typing.List[str]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, of the role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration_seconds AwsProvider#duration_seconds}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#external_id AwsProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policy"></a>

```python
policy: str
```

- *Type:* str

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `session_name`<sup>Optional</sup> <a name="session_name" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sessionName"></a>

```python
session_name: str
```

- *Type:* str

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `source_identity`<sup>Optional</sup> <a name="source_identity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.sourceIdentity"></a>

```python
source_identity: str
```

- *Type:* str

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#source_identity AwsProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Assume role session tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

##### `transitive_tag_keys`<sup>Optional</sup> <a name="transitive_tag_keys" id="@cdktf/provider-aws.provider.AwsProviderAssumeRole.property.transitiveTagKeys"></a>

```python
transitive_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transitive_tag_keys AwsProvider#transitive_tag_keys}

---

### AwsProviderAssumeRoleWithWebIdentity <a name="AwsProviderAssumeRoleWithWebIdentity" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProviderAssumeRoleWithWebIdentity(
  duration: str = None,
  policy: str = None,
  policy_arns: typing.List[str] = None,
  role_arn: str = None,
  session_name: str = None,
  web_identity_token: str = None,
  web_identity_token_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>str</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>str</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn">role_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName">session_name</a></code> | <code>str</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken">web_identity_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">web_identity_token_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration AwsProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policy"></a>

```python
policy: str
```

- *Type:* str

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}

---

##### `session_name`<sup>Optional</sup> <a name="session_name" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```python
session_name: str
```

- *Type:* str

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}

---

##### `web_identity_token`<sup>Optional</sup> <a name="web_identity_token" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```python
web_identity_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token AwsProvider#web_identity_token}.

---

##### `web_identity_token_file`<sup>Optional</sup> <a name="web_identity_token_file" id="@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```python
web_identity_token_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#web_identity_token_file AwsProvider#web_identity_token_file}.

---

### AwsProviderConfig <a name="AwsProviderConfig" id="@cdktf/provider-aws.provider.AwsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProviderConfig(
  access_key: str = None,
  alias: str = None,
  allowed_account_ids: typing.List[str] = None,
  assume_role: typing.Union[IResolvable, typing.List[AwsProviderAssumeRole]] = None,
  assume_role_with_web_identity: typing.Union[IResolvable, typing.List[AwsProviderAssumeRoleWithWebIdentity]] = None,
  custom_ca_bundle: str = None,
  default_tags: typing.Union[IResolvable, typing.List[AwsProviderDefaultTags]] = None,
  ec2_metadata_service_endpoint: str = None,
  ec2_metadata_service_endpoint_mode: str = None,
  endpoints: typing.Union[IResolvable, typing.List[AwsProviderEndpoints]] = None,
  forbidden_account_ids: typing.List[str] = None,
  http_proxy: str = None,
  ignore_tags: typing.Union[IResolvable, typing.List[AwsProviderIgnoreTags]] = None,
  insecure: typing.Union[bool, IResolvable] = None,
  max_retries: typing.Union[int, float] = None,
  profile: str = None,
  region: str = None,
  s3_force_path_style: typing.Union[bool, IResolvable] = None,
  s3_use_path_style: typing.Union[bool, IResolvable] = None,
  secret_key: str = None,
  shared_config_files: typing.List[str] = None,
  shared_credentials_file: str = None,
  shared_credentials_files: typing.List[str] = None,
  skip_credentials_validation: typing.Union[bool, IResolvable] = None,
  skip_get_ec2_platforms: typing.Union[bool, IResolvable] = None,
  skip_metadata_api_check: str = None,
  skip_region_validation: typing.Union[bool, IResolvable] = None,
  skip_requesting_account_id: typing.Union[bool, IResolvable] = None,
  sts_region: str = None,
  token: str = None,
  use_dualstack_endpoint: typing.Union[bool, IResolvable] = None,
  use_fips_endpoint: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey">access_key</a></code> | <code>str</code> | The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds">allowed_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole">assume_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]</code> | assume_role block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]</code> | assume_role_with_web_identity block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle">custom_ca_bundle</a></code> | <code>str</code> | File containing custom root and intermediate certificates. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags">default_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]</code> | default_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint">ec2_metadata_service_endpoint</a></code> | <code>str</code> | Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode">ec2_metadata_service_endpoint_mode</a></code> | <code>str</code> | Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints">endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds">forbidden_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy">http_proxy</a></code> | <code>str</code> | The address of an HTTP proxy to use when accessing the AWS API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags">ignore_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]</code> | ignore_tags block. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times an AWS API request is being executed. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.profile">profile</a></code> | <code>str</code> | The profile for API operations. If not set, the default profile created with `aws configure` will be used. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.region">region</a></code> | <code>str</code> | The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle">s3_force_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle">s3_use_path_style</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey">secret_key</a></code> | <code>str</code> | The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | List of paths to shared config files. If not set, defaults to [~/.aws/config]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile">shared_credentials_file</a></code> | <code>str</code> | The path to the shared credentials file. If not set, defaults to ~/.aws/credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials]. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation">skip_credentials_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms">skip_get_ec2_platforms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>str</code> | Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation">skip_region_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip static validation of region name. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId">skip_requesting_account_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion">sts_region</a></code> | <code>str</code> | The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.token">token</a></code> | <code>str</code> | session token. A session token is only required if you are using temporary security credentials. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint">use_dualstack_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Resolve an endpoint with DualStack capability. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint">use_fips_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Resolve an endpoint with FIPS capability. |

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}

---

##### `allowed_account_ids`<sup>Optional</sup> <a name="allowed_account_ids" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.allowedAccountIds"></a>

```python
allowed_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}.

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRole"></a>

```python
assume_role: typing.Union[IResolvable, typing.List[AwsProviderAssumeRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>]]

assume_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.assumeRoleWithWebIdentity"></a>

```python
assume_role_with_web_identity: typing.Union[IResolvable, typing.List[AwsProviderAssumeRoleWithWebIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderAssumeRoleWithWebIdentity">AwsProviderAssumeRoleWithWebIdentity</a>]]

assume_role_with_web_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}

---

##### `custom_ca_bundle`<sup>Optional</sup> <a name="custom_ca_bundle" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.customCaBundle"></a>

```python
custom_ca_bundle: str
```

- *Type:* str

File containing custom root and intermediate certificates.

Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#custom_ca_bundle AwsProvider#custom_ca_bundle}

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.defaultTags"></a>

```python
default_tags: typing.Union[IResolvable, typing.List[AwsProviderDefaultTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>]]

default_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}

---

##### `ec2_metadata_service_endpoint`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpoint"></a>

```python
ec2_metadata_service_endpoint: str
```

- *Type:* str

Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}

---

##### `ec2_metadata_service_endpoint_mode`<sup>Optional</sup> <a name="ec2_metadata_service_endpoint_mode" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ec2MetadataServiceEndpointMode"></a>

```python
ec2_metadata_service_endpoint_mode: str
```

- *Type:* str

Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.endpoints"></a>

```python
endpoints: typing.Union[IResolvable, typing.List[AwsProviderEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>]]

endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}

---

##### `forbidden_account_ids`<sup>Optional</sup> <a name="forbidden_account_ids" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.forbiddenAccountIds"></a>

```python
forbidden_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}.

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

The address of an HTTP proxy to use when accessing the AWS API.

Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#http_proxy AwsProvider#http_proxy}

---

##### `ignore_tags`<sup>Optional</sup> <a name="ignore_tags" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.ignoreTags"></a>

```python
ignore_tags: typing.Union[IResolvable, typing.List[AwsProviderIgnoreTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>]]

ignore_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times an AWS API request is being executed.

If the API request still fails, an error is
thrown.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

The profile for API operations. If not set, the default profile created with `aws configure` will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}

---

##### `s3_force_path_style`<sup>Optional</sup> <a name="s3_force_path_style" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3ForcePathStyle"></a>

```python
s3_force_path_style: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}

---

##### `s3_use_path_style`<sup>Optional</sup> <a name="s3_use_path_style" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.s3UsePathStyle"></a>

```python
s3_use_path_style: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this to true to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_use_path_style AwsProvider#s3_use_path_style}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedConfigFiles"></a>

```python
shared_config_files: typing.List[str]
```

- *Type:* typing.List[str]

List of paths to shared config files. If not set, defaults to [~/.aws/config].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_config_files AwsProvider#shared_config_files}

---

##### `shared_credentials_file`<sup>Optional</sup> <a name="shared_credentials_file" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFile"></a>

```python
shared_credentials_file: str
```

- *Type:* str

The path to the shared credentials file. If not set, defaults to ~/.aws/credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.sharedCredentialsFiles"></a>

```python
shared_credentials_files: typing.List[str]
```

- *Type:* typing.List[str]

List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_files AwsProvider#shared_credentials_files}

---

##### `skip_credentials_validation`<sup>Optional</sup> <a name="skip_credentials_validation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipCredentialsValidation"></a>

```python
skip_credentials_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}

---

##### `skip_get_ec2_platforms`<sup>Optional</sup> <a name="skip_get_ec2_platforms" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipGetEc2Platforms"></a>

```python
skip_get_ec2_platforms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipMetadataApiCheck"></a>

```python
skip_metadata_api_check: str
```

- *Type:* str

Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}

---

##### `skip_region_validation`<sup>Optional</sup> <a name="skip_region_validation" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRegionValidation"></a>

```python
skip_region_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip static validation of region name.

Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}

---

##### `skip_requesting_account_id`<sup>Optional</sup> <a name="skip_requesting_account_id" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.skipRequestingAccountId"></a>

```python
skip_requesting_account_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}

---

##### `sts_region`<sup>Optional</sup> <a name="sts_region" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.stsRegion"></a>

```python
sts_region: str
```

- *Type:* str

The region where AWS STS operations will take place. Examples are us-east-1 and us-west-2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts_region AwsProvider#sts_region}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

session token. A session token is only required if you are using temporary security credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}

---

##### `use_dualstack_endpoint`<sup>Optional</sup> <a name="use_dualstack_endpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useDualstackEndpoint"></a>

```python
use_dualstack_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Resolve an endpoint with DualStack capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}

---

##### `use_fips_endpoint`<sup>Optional</sup> <a name="use_fips_endpoint" id="@cdktf/provider-aws.provider.AwsProviderConfig.property.useFipsEndpoint"></a>

```python
use_fips_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Resolve an endpoint with FIPS capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#use_fips_endpoint AwsProvider#use_fips_endpoint}

---

### AwsProviderDefaultTags <a name="AwsProviderDefaultTags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProviderDefaultTags(
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Resource tags to default across all resources. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.provider.AwsProviderDefaultTags.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource tags to default across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}

---

### AwsProviderEndpoints <a name="AwsProviderEndpoints" id="@cdktf/provider-aws.provider.AwsProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProviderEndpoints(
  accessanalyzer: str = None,
  account: str = None,
  acm: str = None,
  acmpca: str = None,
  alexaforbusiness: str = None,
  amg: str = None,
  amp: str = None,
  amplify: str = None,
  amplifybackend: str = None,
  amplifyuibuilder: str = None,
  apigateway: str = None,
  apigatewaymanagementapi: str = None,
  apigatewayv2: str = None,
  appautoscaling: str = None,
  appconfig: str = None,
  appconfigdata: str = None,
  appflow: str = None,
  appintegrations: str = None,
  appintegrationsservice: str = None,
  applicationautoscaling: str = None,
  applicationcostprofiler: str = None,
  applicationdiscovery: str = None,
  applicationdiscoveryservice: str = None,
  applicationinsights: str = None,
  appmesh: str = None,
  appregistry: str = None,
  apprunner: str = None,
  appstream: str = None,
  appsync: str = None,
  athena: str = None,
  auditmanager: str = None,
  augmentedairuntime: str = None,
  autoscaling: str = None,
  autoscalingplans: str = None,
  backup: str = None,
  backupgateway: str = None,
  batch: str = None,
  beanstalk: str = None,
  billingconductor: str = None,
  braket: str = None,
  budgets: str = None,
  ce: str = None,
  chime: str = None,
  chimesdkidentity: str = None,
  chimesdkmeetings: str = None,
  chimesdkmessaging: str = None,
  cloud9: str = None,
  cloudcontrol: str = None,
  cloudcontrolapi: str = None,
  clouddirectory: str = None,
  cloudformation: str = None,
  cloudfront: str = None,
  cloudhsm: str = None,
  cloudhsmv2: str = None,
  cloudsearch: str = None,
  cloudsearchdomain: str = None,
  cloudtrail: str = None,
  cloudwatch: str = None,
  cloudwatchevents: str = None,
  cloudwatchevidently: str = None,
  cloudwatchlog: str = None,
  cloudwatchlogs: str = None,
  cloudwatchobservabilityaccessmanager: str = None,
  cloudwatchrum: str = None,
  codeartifact: str = None,
  codebuild: str = None,
  codecommit: str = None,
  codedeploy: str = None,
  codeguruprofiler: str = None,
  codegurureviewer: str = None,
  codepipeline: str = None,
  codestar: str = None,
  codestarconnections: str = None,
  codestarnotifications: str = None,
  cognitoidentity: str = None,
  cognitoidentityprovider: str = None,
  cognitoidp: str = None,
  cognitosync: str = None,
  comprehend: str = None,
  comprehendmedical: str = None,
  computeoptimizer: str = None,
  config: str = None,
  configservice: str = None,
  connect: str = None,
  connectcontactlens: str = None,
  connectparticipant: str = None,
  connectwisdomservice: str = None,
  controltower: str = None,
  costandusagereportservice: str = None,
  costexplorer: str = None,
  cur: str = None,
  customerprofiles: str = None,
  databasemigration: str = None,
  databasemigrationservice: str = None,
  databrew: str = None,
  dataexchange: str = None,
  datapipeline: str = None,
  datasync: str = None,
  dax: str = None,
  deploy: str = None,
  detective: str = None,
  devicefarm: str = None,
  devopsguru: str = None,
  directconnect: str = None,
  directoryservice: str = None,
  discovery: str = None,
  dlm: str = None,
  dms: str = None,
  docdb: str = None,
  drs: str = None,
  ds: str = None,
  dynamodb: str = None,
  dynamodbstreams: str = None,
  ebs: str = None,
  ec2: str = None,
  ec2_instanceconnect: str = None,
  ecr: str = None,
  ecrpublic: str = None,
  ecs: str = None,
  efs: str = None,
  eks: str = None,
  elasticache: str = None,
  elasticbeanstalk: str = None,
  elasticinference: str = None,
  elasticloadbalancing: str = None,
  elasticloadbalancingv2: str = None,
  elasticsearch: str = None,
  elasticsearchservice: str = None,
  elastictranscoder: str = None,
  elb: str = None,
  elbv2: str = None,
  emr: str = None,
  emrcontainers: str = None,
  emrserverless: str = None,
  es: str = None,
  eventbridge: str = None,
  events: str = None,
  evidently: str = None,
  finspace: str = None,
  finspacedata: str = None,
  firehose: str = None,
  fis: str = None,
  fms: str = None,
  forecast: str = None,
  forecastquery: str = None,
  forecastqueryservice: str = None,
  forecastservice: str = None,
  frauddetector: str = None,
  fsx: str = None,
  gamelift: str = None,
  glacier: str = None,
  globalaccelerator: str = None,
  glue: str = None,
  gluedatabrew: str = None,
  grafana: str = None,
  greengrass: str = None,
  greengrassv2: str = None,
  groundstation: str = None,
  guardduty: str = None,
  health: str = None,
  healthlake: str = None,
  honeycode: str = None,
  iam: str = None,
  identitystore: str = None,
  imagebuilder: str = None,
  inspector: str = None,
  inspector2: str = None,
  inspectorv2: str = None,
  iot: str = None,
  iot1_clickdevices: str = None,
  iot1_clickdevicesservice: str = None,
  iot1_clickprojects: str = None,
  iotanalytics: str = None,
  iotdata: str = None,
  iotdataplane: str = None,
  iotdeviceadvisor: str = None,
  iotevents: str = None,
  ioteventsdata: str = None,
  iotfleethub: str = None,
  iotjobsdata: str = None,
  iotjobsdataplane: str = None,
  iotsecuretunneling: str = None,
  iotsitewise: str = None,
  iotthingsgraph: str = None,
  iottwinmaker: str = None,
  iotwireless: str = None,
  ivs: str = None,
  ivschat: str = None,
  kafka: str = None,
  kafkaconnect: str = None,
  kendra: str = None,
  keyspaces: str = None,
  kinesis: str = None,
  kinesisanalytics: str = None,
  kinesisanalyticsv2: str = None,
  kinesisvideo: str = None,
  kinesisvideoarchivedmedia: str = None,
  kinesisvideomedia: str = None,
  kinesisvideosignaling: str = None,
  kinesisvideosignalingchannels: str = None,
  kms: str = None,
  lakeformation: str = None,
  lambda: str = None,
  lex: str = None,
  lexmodelbuilding: str = None,
  lexmodelbuildingservice: str = None,
  lexmodels: str = None,
  lexmodelsv2: str = None,
  lexruntime: str = None,
  lexruntimeservice: str = None,
  lexruntimev2: str = None,
  lexv2_models: str = None,
  lexv2_runtime: str = None,
  licensemanager: str = None,
  lightsail: str = None,
  location: str = None,
  locationservice: str = None,
  logs: str = None,
  lookoutequipment: str = None,
  lookoutforvision: str = None,
  lookoutmetrics: str = None,
  lookoutvision: str = None,
  machinelearning: str = None,
  macie: str = None,
  macie2: str = None,
  managedblockchain: str = None,
  managedgrafana: str = None,
  marketplacecatalog: str = None,
  marketplacecommerceanalytics: str = None,
  marketplaceentitlement: str = None,
  marketplaceentitlementservice: str = None,
  marketplacemetering: str = None,
  mediaconnect: str = None,
  mediaconvert: str = None,
  medialive: str = None,
  mediapackage: str = None,
  mediapackagevod: str = None,
  mediastore: str = None,
  mediastoredata: str = None,
  mediatailor: str = None,
  memorydb: str = None,
  meteringmarketplace: str = None,
  mgh: str = None,
  mgn: str = None,
  migrationhub: str = None,
  migrationhubconfig: str = None,
  migrationhubrefactorspaces: str = None,
  migrationhubstrategy: str = None,
  migrationhubstrategyrecommendations: str = None,
  mobile: str = None,
  mq: str = None,
  msk: str = None,
  mturk: str = None,
  mwaa: str = None,
  neptune: str = None,
  networkfirewall: str = None,
  networkmanager: str = None,
  nimble: str = None,
  nimblestudio: str = None,
  oam: str = None,
  opensearch: str = None,
  opensearchserverless: str = None,
  opensearchservice: str = None,
  opsworks: str = None,
  opsworkscm: str = None,
  organizations: str = None,
  outposts: str = None,
  panorama: str = None,
  personalize: str = None,
  personalizeevents: str = None,
  personalizeruntime: str = None,
  pi: str = None,
  pinpoint: str = None,
  pinpointemail: str = None,
  pinpointsmsvoice: str = None,
  pipes: str = None,
  polly: str = None,
  pricing: str = None,
  prometheus: str = None,
  prometheusservice: str = None,
  proton: str = None,
  qldb: str = None,
  qldbsession: str = None,
  quicksight: str = None,
  ram: str = None,
  rbin: str = None,
  rds: str = None,
  rdsdata: str = None,
  rdsdataservice: str = None,
  recyclebin: str = None,
  redshift: str = None,
  redshiftdata: str = None,
  redshiftdataapiservice: str = None,
  redshiftserverless: str = None,
  rekognition: str = None,
  resiliencehub: str = None,
  resourceexplorer2: str = None,
  resourcegroups: str = None,
  resourcegroupstagging: str = None,
  resourcegroupstaggingapi: str = None,
  robomaker: str = None,
  rolesanywhere: str = None,
  route53: str = None,
  route53_domains: str = None,
  route53_recoverycluster: str = None,
  route53_recoverycontrolconfig: str = None,
  route53_recoveryreadiness: str = None,
  route53_resolver: str = None,
  rum: str = None,
  s3: str = None,
  s3_api: str = None,
  s3_control: str = None,
  s3_outposts: str = None,
  sagemaker: str = None,
  sagemakera2_iruntime: str = None,
  sagemakeredge: str = None,
  sagemakeredgemanager: str = None,
  sagemakerfeaturestoreruntime: str = None,
  sagemakerruntime: str = None,
  savingsplans: str = None,
  scheduler: str = None,
  schemas: str = None,
  sdb: str = None,
  secretsmanager: str = None,
  securityhub: str = None,
  serverlessapplicationrepository: str = None,
  serverlessapprepo: str = None,
  serverlessrepo: str = None,
  servicecatalog: str = None,
  servicecatalogappregistry: str = None,
  servicediscovery: str = None,
  servicequotas: str = None,
  ses: str = None,
  sesv2: str = None,
  sfn: str = None,
  shield: str = None,
  signer: str = None,
  simpledb: str = None,
  sms: str = None,
  snowball: str = None,
  snowdevicemanagement: str = None,
  sns: str = None,
  sqs: str = None,
  ssm: str = None,
  ssmcontacts: str = None,
  ssmincidents: str = None,
  sso: str = None,
  ssoadmin: str = None,
  ssooidc: str = None,
  stepfunctions: str = None,
  storagegateway: str = None,
  sts: str = None,
  support: str = None,
  swf: str = None,
  synthetics: str = None,
  textract: str = None,
  timestreamquery: str = None,
  timestreamwrite: str = None,
  transcribe: str = None,
  transcribeservice: str = None,
  transcribestreaming: str = None,
  transcribestreamingservice: str = None,
  transfer: str = None,
  translate: str = None,
  voiceid: str = None,
  waf: str = None,
  wafregional: str = None,
  wafv2: str = None,
  wellarchitected: str = None,
  wisdom: str = None,
  workdocs: str = None,
  worklink: str = None,
  workmail: str = None,
  workmailmessageflow: str = None,
  workspaces: str = None,
  workspacesweb: str = None,
  xray: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer">accessanalyzer</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account">account</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm">acm</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca">acmpca</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness">alexaforbusiness</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg">amg</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp">amp</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify">amplify</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend">amplifybackend</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder">amplifyuibuilder</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway">apigateway</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi">apigatewaymanagementapi</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2">apigatewayv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling">appautoscaling</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig">appconfig</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata">appconfigdata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow">appflow</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations">appintegrations</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice">appintegrationsservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling">applicationautoscaling</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler">applicationcostprofiler</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery">applicationdiscovery</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice">applicationdiscoveryservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights">applicationinsights</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh">appmesh</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry">appregistry</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner">apprunner</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream">appstream</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync">appsync</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena">athena</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager">auditmanager</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime">augmentedairuntime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling">autoscaling</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans">autoscalingplans</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup">backup</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway">backupgateway</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch">batch</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk">beanstalk</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor">billingconductor</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket">braket</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets">budgets</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce">ce</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime">chime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity">chimesdkidentity</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings">chimesdkmeetings</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging">chimesdkmessaging</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9">cloud9</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol">cloudcontrol</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi">cloudcontrolapi</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory">clouddirectory</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation">cloudformation</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront">cloudfront</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm">cloudhsm</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2">cloudhsmv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch">cloudsearch</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain">cloudsearchdomain</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail">cloudtrail</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch">cloudwatch</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents">cloudwatchevents</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently">cloudwatchevidently</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog">cloudwatchlog</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs">cloudwatchlogs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager">cloudwatchobservabilityaccessmanager</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum">cloudwatchrum</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact">codeartifact</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild">codebuild</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit">codecommit</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy">codedeploy</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler">codeguruprofiler</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer">codegurureviewer</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline">codepipeline</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar">codestar</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections">codestarconnections</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications">codestarnotifications</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity">cognitoidentity</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider">cognitoidentityprovider</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp">cognitoidp</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync">cognitosync</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend">comprehend</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical">comprehendmedical</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer">computeoptimizer</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config">config</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice">configservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect">connect</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens">connectcontactlens</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant">connectparticipant</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice">connectwisdomservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower">controltower</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice">costandusagereportservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer">costexplorer</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur">cur</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles">customerprofiles</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration">databasemigration</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice">databasemigrationservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew">databrew</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange">dataexchange</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline">datapipeline</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync">datasync</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax">dax</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy">deploy</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective">detective</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm">devicefarm</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru">devopsguru</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect">directconnect</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice">directoryservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery">discovery</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm">dlm</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms">dms</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb">docdb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs">drs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds">ds</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb">dynamodb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams">dynamodbstreams</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs">ebs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2">ec2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect">ec2_instanceconnect</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr">ecr</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic">ecrpublic</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs">ecs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs">efs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks">eks</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache">elasticache</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk">elasticbeanstalk</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference">elasticinference</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing">elasticloadbalancing</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2">elasticloadbalancingv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch">elasticsearch</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice">elasticsearchservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder">elastictranscoder</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb">elb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2">elbv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr">emr</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers">emrcontainers</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless">emrserverless</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es">es</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge">eventbridge</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events">events</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently">evidently</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace">finspace</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata">finspacedata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose">firehose</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis">fis</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms">fms</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast">forecast</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery">forecastquery</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice">forecastqueryservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice">forecastservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector">frauddetector</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx">fsx</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift">gamelift</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier">glacier</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator">globalaccelerator</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue">glue</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew">gluedatabrew</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana">grafana</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass">greengrass</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2">greengrassv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation">groundstation</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty">guardduty</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health">health</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake">healthlake</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode">honeycode</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam">iam</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore">identitystore</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder">imagebuilder</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector">inspector</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2">inspector2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2">inspectorv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot">iot</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices">iot1_clickdevices</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice">iot1_clickdevicesservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects">iot1_clickprojects</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics">iotanalytics</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata">iotdata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane">iotdataplane</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor">iotdeviceadvisor</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents">iotevents</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata">ioteventsdata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub">iotfleethub</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata">iotjobsdata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane">iotjobsdataplane</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling">iotsecuretunneling</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise">iotsitewise</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph">iotthingsgraph</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker">iottwinmaker</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless">iotwireless</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs">ivs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat">ivschat</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka">kafka</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect">kafkaconnect</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra">kendra</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces">keyspaces</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis">kinesis</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics">kinesisanalytics</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2">kinesisanalyticsv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo">kinesisvideo</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia">kinesisvideoarchivedmedia</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia">kinesisvideomedia</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling">kinesisvideosignaling</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels">kinesisvideosignalingchannels</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms">kms</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation">lakeformation</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda">lambda</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex">lex</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding">lexmodelbuilding</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice">lexmodelbuildingservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels">lexmodels</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2">lexmodelsv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime">lexruntime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice">lexruntimeservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2">lexruntimev2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models">lexv2_models</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime">lexv2_runtime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager">licensemanager</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail">lightsail</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location">location</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice">locationservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs">logs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment">lookoutequipment</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision">lookoutforvision</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics">lookoutmetrics</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision">lookoutvision</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning">machinelearning</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie">macie</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2">macie2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain">managedblockchain</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana">managedgrafana</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog">marketplacecatalog</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics">marketplacecommerceanalytics</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement">marketplaceentitlement</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice">marketplaceentitlementservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering">marketplacemetering</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect">mediaconnect</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert">mediaconvert</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive">medialive</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage">mediapackage</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod">mediapackagevod</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore">mediastore</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata">mediastoredata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor">mediatailor</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb">memorydb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace">meteringmarketplace</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh">mgh</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn">mgn</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub">migrationhub</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig">migrationhubconfig</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces">migrationhubrefactorspaces</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy">migrationhubstrategy</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations">migrationhubstrategyrecommendations</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile">mobile</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq">mq</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk">msk</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk">mturk</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa">mwaa</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune">neptune</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall">networkfirewall</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager">networkmanager</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble">nimble</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio">nimblestudio</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam">oam</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch">opensearch</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless">opensearchserverless</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice">opensearchservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks">opsworks</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm">opsworkscm</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations">organizations</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts">outposts</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama">panorama</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize">personalize</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents">personalizeevents</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime">personalizeruntime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi">pi</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint">pinpoint</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail">pinpointemail</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice">pinpointsmsvoice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes">pipes</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly">polly</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing">pricing</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus">prometheus</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice">prometheusservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton">proton</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb">qldb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession">qldbsession</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight">quicksight</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram">ram</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin">rbin</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds">rds</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata">rdsdata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice">rdsdataservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin">recyclebin</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift">redshift</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata">redshiftdata</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice">redshiftdataapiservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless">redshiftserverless</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition">rekognition</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub">resiliencehub</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2">resourceexplorer2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups">resourcegroups</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging">resourcegroupstagging</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi">resourcegroupstaggingapi</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker">robomaker</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere">rolesanywhere</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53">route53</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains">route53_domains</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster">route53_recoverycluster</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig">route53_recoverycontrolconfig</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness">route53_recoveryreadiness</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver">route53_resolver</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum">rum</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3">s3</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api">s3_api</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control">s3_control</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts">s3_outposts</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker">sagemaker</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime">sagemakera2_iruntime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge">sagemakeredge</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager">sagemakeredgemanager</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime">sagemakerfeaturestoreruntime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime">sagemakerruntime</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans">savingsplans</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler">scheduler</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas">schemas</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb">sdb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager">secretsmanager</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub">securityhub</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository">serverlessapplicationrepository</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo">serverlessapprepo</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo">serverlessrepo</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog">servicecatalog</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry">servicecatalogappregistry</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery">servicediscovery</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas">servicequotas</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses">ses</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2">sesv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn">sfn</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield">shield</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer">signer</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb">simpledb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms">sms</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball">snowball</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement">snowdevicemanagement</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns">sns</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs">sqs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm">ssm</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts">ssmcontacts</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents">ssmincidents</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso">sso</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin">ssoadmin</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc">ssooidc</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions">stepfunctions</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway">storagegateway</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts">sts</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support">support</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf">swf</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics">synthetics</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract">textract</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery">timestreamquery</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite">timestreamwrite</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe">transcribe</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice">transcribeservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming">transcribestreaming</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice">transcribestreamingservice</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer">transfer</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate">translate</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid">voiceid</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf">waf</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional">wafregional</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2">wafv2</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected">wellarchitected</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom">wisdom</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs">workdocs</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink">worklink</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail">workmail</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow">workmailmessageflow</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces">workspaces</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb">workspacesweb</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray">xray</a></code> | <code>str</code> | Use this to override the default service endpoint URL. |

---

##### `accessanalyzer`<sup>Optional</sup> <a name="accessanalyzer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.accessanalyzer"></a>

```python
accessanalyzer: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#accessanalyzer AwsProvider#accessanalyzer}

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.account"></a>

```python
account: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#account AwsProvider#account}

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acm"></a>

```python
acm: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acm AwsProvider#acm}

---

##### `acmpca`<sup>Optional</sup> <a name="acmpca" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.acmpca"></a>

```python
acmpca: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acmpca AwsProvider#acmpca}

---

##### `alexaforbusiness`<sup>Optional</sup> <a name="alexaforbusiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.alexaforbusiness"></a>

```python
alexaforbusiness: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alexaforbusiness AwsProvider#alexaforbusiness}

---

##### `amg`<sup>Optional</sup> <a name="amg" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amg"></a>

```python
amg: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amg AwsProvider#amg}

---

##### `amp`<sup>Optional</sup> <a name="amp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amp"></a>

```python
amp: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amp AwsProvider#amp}

---

##### `amplify`<sup>Optional</sup> <a name="amplify" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplify"></a>

```python
amplify: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplify AwsProvider#amplify}

---

##### `amplifybackend`<sup>Optional</sup> <a name="amplifybackend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifybackend"></a>

```python
amplifybackend: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifybackend AwsProvider#amplifybackend}

---

##### `amplifyuibuilder`<sup>Optional</sup> <a name="amplifyuibuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.amplifyuibuilder"></a>

```python
amplifyuibuilder: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplifyuibuilder AwsProvider#amplifyuibuilder}

---

##### `apigateway`<sup>Optional</sup> <a name="apigateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigateway"></a>

```python
apigateway: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigateway AwsProvider#apigateway}

---

##### `apigatewaymanagementapi`<sup>Optional</sup> <a name="apigatewaymanagementapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewaymanagementapi"></a>

```python
apigatewaymanagementapi: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewaymanagementapi AwsProvider#apigatewaymanagementapi}

---

##### `apigatewayv2`<sup>Optional</sup> <a name="apigatewayv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apigatewayv2"></a>

```python
apigatewayv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigatewayv2 AwsProvider#apigatewayv2}

---

##### `appautoscaling`<sup>Optional</sup> <a name="appautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appautoscaling"></a>

```python
appautoscaling: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appautoscaling AwsProvider#appautoscaling}

---

##### `appconfig`<sup>Optional</sup> <a name="appconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfig"></a>

```python
appconfig: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfig AwsProvider#appconfig}

---

##### `appconfigdata`<sup>Optional</sup> <a name="appconfigdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appconfigdata"></a>

```python
appconfigdata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfigdata AwsProvider#appconfigdata}

---

##### `appflow`<sup>Optional</sup> <a name="appflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appflow"></a>

```python
appflow: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appflow AwsProvider#appflow}

---

##### `appintegrations`<sup>Optional</sup> <a name="appintegrations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrations"></a>

```python
appintegrations: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrations AwsProvider#appintegrations}

---

##### `appintegrationsservice`<sup>Optional</sup> <a name="appintegrationsservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appintegrationsservice"></a>

```python
appintegrationsservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appintegrationsservice AwsProvider#appintegrationsservice}

---

##### `applicationautoscaling`<sup>Optional</sup> <a name="applicationautoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationautoscaling"></a>

```python
applicationautoscaling: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationautoscaling AwsProvider#applicationautoscaling}

---

##### `applicationcostprofiler`<sup>Optional</sup> <a name="applicationcostprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationcostprofiler"></a>

```python
applicationcostprofiler: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationcostprofiler AwsProvider#applicationcostprofiler}

---

##### `applicationdiscovery`<sup>Optional</sup> <a name="applicationdiscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscovery"></a>

```python
applicationdiscovery: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscovery AwsProvider#applicationdiscovery}

---

##### `applicationdiscoveryservice`<sup>Optional</sup> <a name="applicationdiscoveryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationdiscoveryservice"></a>

```python
applicationdiscoveryservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationdiscoveryservice AwsProvider#applicationdiscoveryservice}

---

##### `applicationinsights`<sup>Optional</sup> <a name="applicationinsights" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.applicationinsights"></a>

```python
applicationinsights: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationinsights AwsProvider#applicationinsights}

---

##### `appmesh`<sup>Optional</sup> <a name="appmesh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appmesh"></a>

```python
appmesh: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appmesh AwsProvider#appmesh}

---

##### `appregistry`<sup>Optional</sup> <a name="appregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appregistry"></a>

```python
appregistry: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appregistry AwsProvider#appregistry}

---

##### `apprunner`<sup>Optional</sup> <a name="apprunner" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.apprunner"></a>

```python
apprunner: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apprunner AwsProvider#apprunner}

---

##### `appstream`<sup>Optional</sup> <a name="appstream" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appstream"></a>

```python
appstream: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appstream AwsProvider#appstream}

---

##### `appsync`<sup>Optional</sup> <a name="appsync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.appsync"></a>

```python
appsync: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appsync AwsProvider#appsync}

---

##### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.athena"></a>

```python
athena: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#athena AwsProvider#athena}

---

##### `auditmanager`<sup>Optional</sup> <a name="auditmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.auditmanager"></a>

```python
auditmanager: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#auditmanager AwsProvider#auditmanager}

---

##### `augmentedairuntime`<sup>Optional</sup> <a name="augmentedairuntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.augmentedairuntime"></a>

```python
augmentedairuntime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#augmentedairuntime AwsProvider#augmentedairuntime}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscaling"></a>

```python
autoscaling: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscaling AwsProvider#autoscaling}

---

##### `autoscalingplans`<sup>Optional</sup> <a name="autoscalingplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.autoscalingplans"></a>

```python
autoscalingplans: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscalingplans AwsProvider#autoscalingplans}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backup"></a>

```python
backup: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backup AwsProvider#backup}

---

##### `backupgateway`<sup>Optional</sup> <a name="backupgateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.backupgateway"></a>

```python
backupgateway: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backupgateway AwsProvider#backupgateway}

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.batch"></a>

```python
batch: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#batch AwsProvider#batch}

---

##### `beanstalk`<sup>Optional</sup> <a name="beanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.beanstalk"></a>

```python
beanstalk: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#beanstalk AwsProvider#beanstalk}

---

##### `billingconductor`<sup>Optional</sup> <a name="billingconductor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.billingconductor"></a>

```python
billingconductor: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#billingconductor AwsProvider#billingconductor}

---

##### `braket`<sup>Optional</sup> <a name="braket" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.braket"></a>

```python
braket: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#braket AwsProvider#braket}

---

##### `budgets`<sup>Optional</sup> <a name="budgets" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.budgets"></a>

```python
budgets: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#budgets AwsProvider#budgets}

---

##### `ce`<sup>Optional</sup> <a name="ce" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ce"></a>

```python
ce: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ce AwsProvider#ce}

---

##### `chime`<sup>Optional</sup> <a name="chime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chime"></a>

```python
chime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chime AwsProvider#chime}

---

##### `chimesdkidentity`<sup>Optional</sup> <a name="chimesdkidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkidentity"></a>

```python
chimesdkidentity: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkidentity AwsProvider#chimesdkidentity}

---

##### `chimesdkmeetings`<sup>Optional</sup> <a name="chimesdkmeetings" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmeetings"></a>

```python
chimesdkmeetings: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmeetings AwsProvider#chimesdkmeetings}

---

##### `chimesdkmessaging`<sup>Optional</sup> <a name="chimesdkmessaging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.chimesdkmessaging"></a>

```python
chimesdkmessaging: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#chimesdkmessaging AwsProvider#chimesdkmessaging}

---

##### `cloud9`<sup>Optional</sup> <a name="cloud9" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloud9"></a>

```python
cloud9: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloud9 AwsProvider#cloud9}

---

##### `cloudcontrol`<sup>Optional</sup> <a name="cloudcontrol" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrol"></a>

```python
cloudcontrol: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrol AwsProvider#cloudcontrol}

---

##### `cloudcontrolapi`<sup>Optional</sup> <a name="cloudcontrolapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudcontrolapi"></a>

```python
cloudcontrolapi: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudcontrolapi AwsProvider#cloudcontrolapi}

---

##### `clouddirectory`<sup>Optional</sup> <a name="clouddirectory" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.clouddirectory"></a>

```python
clouddirectory: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#clouddirectory AwsProvider#clouddirectory}

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudformation"></a>

```python
cloudformation: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudformation AwsProvider#cloudformation}

---

##### `cloudfront`<sup>Optional</sup> <a name="cloudfront" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudfront"></a>

```python
cloudfront: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudfront AwsProvider#cloudfront}

---

##### `cloudhsm`<sup>Optional</sup> <a name="cloudhsm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsm"></a>

```python
cloudhsm: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsm AwsProvider#cloudhsm}

---

##### `cloudhsmv2`<sup>Optional</sup> <a name="cloudhsmv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudhsmv2"></a>

```python
cloudhsmv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsmv2 AwsProvider#cloudhsmv2}

---

##### `cloudsearch`<sup>Optional</sup> <a name="cloudsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearch"></a>

```python
cloudsearch: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearch AwsProvider#cloudsearch}

---

##### `cloudsearchdomain`<sup>Optional</sup> <a name="cloudsearchdomain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudsearchdomain"></a>

```python
cloudsearchdomain: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearchdomain AwsProvider#cloudsearchdomain}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudtrail"></a>

```python
cloudtrail: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudtrail AwsProvider#cloudtrail}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatch"></a>

```python
cloudwatch: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatch AwsProvider#cloudwatch}

---

##### `cloudwatchevents`<sup>Optional</sup> <a name="cloudwatchevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevents"></a>

```python
cloudwatchevents: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevents AwsProvider#cloudwatchevents}

---

##### `cloudwatchevidently`<sup>Optional</sup> <a name="cloudwatchevidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchevidently"></a>

```python
cloudwatchevidently: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevidently AwsProvider#cloudwatchevidently}

---

##### `cloudwatchlog`<sup>Optional</sup> <a name="cloudwatchlog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlog"></a>

```python
cloudwatchlog: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlog AwsProvider#cloudwatchlog}

---

##### `cloudwatchlogs`<sup>Optional</sup> <a name="cloudwatchlogs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchlogs"></a>

```python
cloudwatchlogs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlogs AwsProvider#cloudwatchlogs}

---

##### `cloudwatchobservabilityaccessmanager`<sup>Optional</sup> <a name="cloudwatchobservabilityaccessmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchobservabilityaccessmanager"></a>

```python
cloudwatchobservabilityaccessmanager: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchobservabilityaccessmanager AwsProvider#cloudwatchobservabilityaccessmanager}

---

##### `cloudwatchrum`<sup>Optional</sup> <a name="cloudwatchrum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cloudwatchrum"></a>

```python
cloudwatchrum: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchrum AwsProvider#cloudwatchrum}

---

##### `codeartifact`<sup>Optional</sup> <a name="codeartifact" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeartifact"></a>

```python
codeartifact: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeartifact AwsProvider#codeartifact}

---

##### `codebuild`<sup>Optional</sup> <a name="codebuild" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codebuild"></a>

```python
codebuild: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codebuild AwsProvider#codebuild}

---

##### `codecommit`<sup>Optional</sup> <a name="codecommit" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codecommit"></a>

```python
codecommit: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codecommit AwsProvider#codecommit}

---

##### `codedeploy`<sup>Optional</sup> <a name="codedeploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codedeploy"></a>

```python
codedeploy: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codedeploy AwsProvider#codedeploy}

---

##### `codeguruprofiler`<sup>Optional</sup> <a name="codeguruprofiler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codeguruprofiler"></a>

```python
codeguruprofiler: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeguruprofiler AwsProvider#codeguruprofiler}

---

##### `codegurureviewer`<sup>Optional</sup> <a name="codegurureviewer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codegurureviewer"></a>

```python
codegurureviewer: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codegurureviewer AwsProvider#codegurureviewer}

---

##### `codepipeline`<sup>Optional</sup> <a name="codepipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codepipeline"></a>

```python
codepipeline: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codepipeline AwsProvider#codepipeline}

---

##### `codestar`<sup>Optional</sup> <a name="codestar" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestar"></a>

```python
codestar: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestar AwsProvider#codestar}

---

##### `codestarconnections`<sup>Optional</sup> <a name="codestarconnections" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarconnections"></a>

```python
codestarconnections: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarconnections AwsProvider#codestarconnections}

---

##### `codestarnotifications`<sup>Optional</sup> <a name="codestarnotifications" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.codestarnotifications"></a>

```python
codestarnotifications: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarnotifications AwsProvider#codestarnotifications}

---

##### `cognitoidentity`<sup>Optional</sup> <a name="cognitoidentity" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentity"></a>

```python
cognitoidentity: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentity AwsProvider#cognitoidentity}

---

##### `cognitoidentityprovider`<sup>Optional</sup> <a name="cognitoidentityprovider" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidentityprovider"></a>

```python
cognitoidentityprovider: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentityprovider AwsProvider#cognitoidentityprovider}

---

##### `cognitoidp`<sup>Optional</sup> <a name="cognitoidp" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitoidp"></a>

```python
cognitoidp: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidp AwsProvider#cognitoidp}

---

##### `cognitosync`<sup>Optional</sup> <a name="cognitosync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cognitosync"></a>

```python
cognitosync: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitosync AwsProvider#cognitosync}

---

##### `comprehend`<sup>Optional</sup> <a name="comprehend" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehend"></a>

```python
comprehend: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehend AwsProvider#comprehend}

---

##### `comprehendmedical`<sup>Optional</sup> <a name="comprehendmedical" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.comprehendmedical"></a>

```python
comprehendmedical: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#comprehendmedical AwsProvider#comprehendmedical}

---

##### `computeoptimizer`<sup>Optional</sup> <a name="computeoptimizer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.computeoptimizer"></a>

```python
computeoptimizer: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#computeoptimizer AwsProvider#computeoptimizer}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.config"></a>

```python
config: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#config AwsProvider#config}

---

##### `configservice`<sup>Optional</sup> <a name="configservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.configservice"></a>

```python
configservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#configservice AwsProvider#configservice}

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connect"></a>

```python
connect: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connect AwsProvider#connect}

---

##### `connectcontactlens`<sup>Optional</sup> <a name="connectcontactlens" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectcontactlens"></a>

```python
connectcontactlens: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectcontactlens AwsProvider#connectcontactlens}

---

##### `connectparticipant`<sup>Optional</sup> <a name="connectparticipant" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectparticipant"></a>

```python
connectparticipant: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectparticipant AwsProvider#connectparticipant}

---

##### `connectwisdomservice`<sup>Optional</sup> <a name="connectwisdomservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.connectwisdomservice"></a>

```python
connectwisdomservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connectwisdomservice AwsProvider#connectwisdomservice}

---

##### `controltower`<sup>Optional</sup> <a name="controltower" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.controltower"></a>

```python
controltower: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#controltower AwsProvider#controltower}

---

##### `costandusagereportservice`<sup>Optional</sup> <a name="costandusagereportservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costandusagereportservice"></a>

```python
costandusagereportservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costandusagereportservice AwsProvider#costandusagereportservice}

---

##### `costexplorer`<sup>Optional</sup> <a name="costexplorer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.costexplorer"></a>

```python
costexplorer: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#costexplorer AwsProvider#costexplorer}

---

##### `cur`<sup>Optional</sup> <a name="cur" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.cur"></a>

```python
cur: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cur AwsProvider#cur}

---

##### `customerprofiles`<sup>Optional</sup> <a name="customerprofiles" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.customerprofiles"></a>

```python
customerprofiles: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#customerprofiles AwsProvider#customerprofiles}

---

##### `databasemigration`<sup>Optional</sup> <a name="databasemigration" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigration"></a>

```python
databasemigration: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigration AwsProvider#databasemigration}

---

##### `databasemigrationservice`<sup>Optional</sup> <a name="databasemigrationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databasemigrationservice"></a>

```python
databasemigrationservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databasemigrationservice AwsProvider#databasemigrationservice}

---

##### `databrew`<sup>Optional</sup> <a name="databrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.databrew"></a>

```python
databrew: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#databrew AwsProvider#databrew}

---

##### `dataexchange`<sup>Optional</sup> <a name="dataexchange" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dataexchange"></a>

```python
dataexchange: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dataexchange AwsProvider#dataexchange}

---

##### `datapipeline`<sup>Optional</sup> <a name="datapipeline" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datapipeline"></a>

```python
datapipeline: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datapipeline AwsProvider#datapipeline}

---

##### `datasync`<sup>Optional</sup> <a name="datasync" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.datasync"></a>

```python
datasync: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datasync AwsProvider#datasync}

---

##### `dax`<sup>Optional</sup> <a name="dax" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dax"></a>

```python
dax: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dax AwsProvider#dax}

---

##### `deploy`<sup>Optional</sup> <a name="deploy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.deploy"></a>

```python
deploy: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#deploy AwsProvider#deploy}

---

##### `detective`<sup>Optional</sup> <a name="detective" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.detective"></a>

```python
detective: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#detective AwsProvider#detective}

---

##### `devicefarm`<sup>Optional</sup> <a name="devicefarm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devicefarm"></a>

```python
devicefarm: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devicefarm AwsProvider#devicefarm}

---

##### `devopsguru`<sup>Optional</sup> <a name="devopsguru" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.devopsguru"></a>

```python
devopsguru: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devopsguru AwsProvider#devopsguru}

---

##### `directconnect`<sup>Optional</sup> <a name="directconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directconnect"></a>

```python
directconnect: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directconnect AwsProvider#directconnect}

---

##### `directoryservice`<sup>Optional</sup> <a name="directoryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.directoryservice"></a>

```python
directoryservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directoryservice AwsProvider#directoryservice}

---

##### `discovery`<sup>Optional</sup> <a name="discovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.discovery"></a>

```python
discovery: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#discovery AwsProvider#discovery}

---

##### `dlm`<sup>Optional</sup> <a name="dlm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dlm"></a>

```python
dlm: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dlm AwsProvider#dlm}

---

##### `dms`<sup>Optional</sup> <a name="dms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dms"></a>

```python
dms: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dms AwsProvider#dms}

---

##### `docdb`<sup>Optional</sup> <a name="docdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.docdb"></a>

```python
docdb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#docdb AwsProvider#docdb}

---

##### `drs`<sup>Optional</sup> <a name="drs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.drs"></a>

```python
drs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#drs AwsProvider#drs}

---

##### `ds`<sup>Optional</sup> <a name="ds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ds"></a>

```python
ds: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ds AwsProvider#ds}

---

##### `dynamodb`<sup>Optional</sup> <a name="dynamodb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodb"></a>

```python
dynamodb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodb AwsProvider#dynamodb}

---

##### `dynamodbstreams`<sup>Optional</sup> <a name="dynamodbstreams" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.dynamodbstreams"></a>

```python
dynamodbstreams: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodbstreams AwsProvider#dynamodbstreams}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ebs"></a>

```python
ebs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ebs AwsProvider#ebs}

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2"></a>

```python
ec2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2 AwsProvider#ec2}

---

##### `ec2_instanceconnect`<sup>Optional</sup> <a name="ec2_instanceconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ec2Instanceconnect"></a>

```python
ec2_instanceconnect: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2instanceconnect AwsProvider#ec2instanceconnect}

---

##### `ecr`<sup>Optional</sup> <a name="ecr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecr"></a>

```python
ecr: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecr AwsProvider#ecr}

---

##### `ecrpublic`<sup>Optional</sup> <a name="ecrpublic" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecrpublic"></a>

```python
ecrpublic: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecrpublic AwsProvider#ecrpublic}

---

##### `ecs`<sup>Optional</sup> <a name="ecs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ecs"></a>

```python
ecs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecs AwsProvider#ecs}

---

##### `efs`<sup>Optional</sup> <a name="efs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.efs"></a>

```python
efs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#efs AwsProvider#efs}

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eks"></a>

```python
eks: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eks AwsProvider#eks}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticache"></a>

```python
elasticache: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticache AwsProvider#elasticache}

---

##### `elasticbeanstalk`<sup>Optional</sup> <a name="elasticbeanstalk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticbeanstalk"></a>

```python
elasticbeanstalk: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticbeanstalk AwsProvider#elasticbeanstalk}

---

##### `elasticinference`<sup>Optional</sup> <a name="elasticinference" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticinference"></a>

```python
elasticinference: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticinference AwsProvider#elasticinference}

---

##### `elasticloadbalancing`<sup>Optional</sup> <a name="elasticloadbalancing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancing"></a>

```python
elasticloadbalancing: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancing AwsProvider#elasticloadbalancing}

---

##### `elasticloadbalancingv2`<sup>Optional</sup> <a name="elasticloadbalancingv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticloadbalancingv2"></a>

```python
elasticloadbalancingv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticloadbalancingv2 AwsProvider#elasticloadbalancingv2}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearch"></a>

```python
elasticsearch: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearch AwsProvider#elasticsearch}

---

##### `elasticsearchservice`<sup>Optional</sup> <a name="elasticsearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elasticsearchservice"></a>

```python
elasticsearchservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticsearchservice AwsProvider#elasticsearchservice}

---

##### `elastictranscoder`<sup>Optional</sup> <a name="elastictranscoder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elastictranscoder"></a>

```python
elastictranscoder: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elastictranscoder AwsProvider#elastictranscoder}

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elb"></a>

```python
elb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elb AwsProvider#elb}

---

##### `elbv2`<sup>Optional</sup> <a name="elbv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.elbv2"></a>

```python
elbv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elbv2 AwsProvider#elbv2}

---

##### `emr`<sup>Optional</sup> <a name="emr" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emr"></a>

```python
emr: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emr AwsProvider#emr}

---

##### `emrcontainers`<sup>Optional</sup> <a name="emrcontainers" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrcontainers"></a>

```python
emrcontainers: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrcontainers AwsProvider#emrcontainers}

---

##### `emrserverless`<sup>Optional</sup> <a name="emrserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.emrserverless"></a>

```python
emrserverless: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrserverless AwsProvider#emrserverless}

---

##### `es`<sup>Optional</sup> <a name="es" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.es"></a>

```python
es: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#es AwsProvider#es}

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.eventbridge"></a>

```python
eventbridge: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eventbridge AwsProvider#eventbridge}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.events"></a>

```python
events: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#events AwsProvider#events}

---

##### `evidently`<sup>Optional</sup> <a name="evidently" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.evidently"></a>

```python
evidently: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#evidently AwsProvider#evidently}

---

##### `finspace`<sup>Optional</sup> <a name="finspace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspace"></a>

```python
finspace: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspace AwsProvider#finspace}

---

##### `finspacedata`<sup>Optional</sup> <a name="finspacedata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.finspacedata"></a>

```python
finspacedata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#finspacedata AwsProvider#finspacedata}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.firehose"></a>

```python
firehose: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#firehose AwsProvider#firehose}

---

##### `fis`<sup>Optional</sup> <a name="fis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fis"></a>

```python
fis: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fis AwsProvider#fis}

---

##### `fms`<sup>Optional</sup> <a name="fms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fms"></a>

```python
fms: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fms AwsProvider#fms}

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecast"></a>

```python
forecast: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecast AwsProvider#forecast}

---

##### `forecastquery`<sup>Optional</sup> <a name="forecastquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastquery"></a>

```python
forecastquery: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastquery AwsProvider#forecastquery}

---

##### `forecastqueryservice`<sup>Optional</sup> <a name="forecastqueryservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastqueryservice"></a>

```python
forecastqueryservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastqueryservice AwsProvider#forecastqueryservice}

---

##### `forecastservice`<sup>Optional</sup> <a name="forecastservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.forecastservice"></a>

```python
forecastservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecastservice AwsProvider#forecastservice}

---

##### `frauddetector`<sup>Optional</sup> <a name="frauddetector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.frauddetector"></a>

```python
frauddetector: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#frauddetector AwsProvider#frauddetector}

---

##### `fsx`<sup>Optional</sup> <a name="fsx" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.fsx"></a>

```python
fsx: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fsx AwsProvider#fsx}

---

##### `gamelift`<sup>Optional</sup> <a name="gamelift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gamelift"></a>

```python
gamelift: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gamelift AwsProvider#gamelift}

---

##### `glacier`<sup>Optional</sup> <a name="glacier" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glacier"></a>

```python
glacier: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glacier AwsProvider#glacier}

---

##### `globalaccelerator`<sup>Optional</sup> <a name="globalaccelerator" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.globalaccelerator"></a>

```python
globalaccelerator: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#globalaccelerator AwsProvider#globalaccelerator}

---

##### `glue`<sup>Optional</sup> <a name="glue" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.glue"></a>

```python
glue: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glue AwsProvider#glue}

---

##### `gluedatabrew`<sup>Optional</sup> <a name="gluedatabrew" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.gluedatabrew"></a>

```python
gluedatabrew: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gluedatabrew AwsProvider#gluedatabrew}

---

##### `grafana`<sup>Optional</sup> <a name="grafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.grafana"></a>

```python
grafana: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#grafana AwsProvider#grafana}

---

##### `greengrass`<sup>Optional</sup> <a name="greengrass" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrass"></a>

```python
greengrass: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrass AwsProvider#greengrass}

---

##### `greengrassv2`<sup>Optional</sup> <a name="greengrassv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.greengrassv2"></a>

```python
greengrassv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrassv2 AwsProvider#greengrassv2}

---

##### `groundstation`<sup>Optional</sup> <a name="groundstation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.groundstation"></a>

```python
groundstation: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#groundstation AwsProvider#groundstation}

---

##### `guardduty`<sup>Optional</sup> <a name="guardduty" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.guardduty"></a>

```python
guardduty: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#guardduty AwsProvider#guardduty}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.health"></a>

```python
health: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#health AwsProvider#health}

---

##### `healthlake`<sup>Optional</sup> <a name="healthlake" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.healthlake"></a>

```python
healthlake: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#healthlake AwsProvider#healthlake}

---

##### `honeycode`<sup>Optional</sup> <a name="honeycode" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.honeycode"></a>

```python
honeycode: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#honeycode AwsProvider#honeycode}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iam"></a>

```python
iam: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iam AwsProvider#iam}

---

##### `identitystore`<sup>Optional</sup> <a name="identitystore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.identitystore"></a>

```python
identitystore: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#identitystore AwsProvider#identitystore}

---

##### `imagebuilder`<sup>Optional</sup> <a name="imagebuilder" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.imagebuilder"></a>

```python
imagebuilder: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#imagebuilder AwsProvider#imagebuilder}

---

##### `inspector`<sup>Optional</sup> <a name="inspector" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector"></a>

```python
inspector: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector AwsProvider#inspector}

---

##### `inspector2`<sup>Optional</sup> <a name="inspector2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspector2"></a>

```python
inspector2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector2 AwsProvider#inspector2}

---

##### `inspectorv2`<sup>Optional</sup> <a name="inspectorv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.inspectorv2"></a>

```python
inspectorv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspectorv2 AwsProvider#inspectorv2}

---

##### `iot`<sup>Optional</sup> <a name="iot" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot"></a>

```python
iot: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot AwsProvider#iot}

---

##### `iot1_clickdevices`<sup>Optional</sup> <a name="iot1_clickdevices" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevices"></a>

```python
iot1_clickdevices: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevices AwsProvider#iot1clickdevices}

---

##### `iot1_clickdevicesservice`<sup>Optional</sup> <a name="iot1_clickdevicesservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice"></a>

```python
iot1_clickdevicesservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickdevicesservice AwsProvider#iot1clickdevicesservice}

---

##### `iot1_clickprojects`<sup>Optional</sup> <a name="iot1_clickprojects" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iot1Clickprojects"></a>

```python
iot1_clickprojects: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot1clickprojects AwsProvider#iot1clickprojects}

---

##### `iotanalytics`<sup>Optional</sup> <a name="iotanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotanalytics"></a>

```python
iotanalytics: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotanalytics AwsProvider#iotanalytics}

---

##### `iotdata`<sup>Optional</sup> <a name="iotdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdata"></a>

```python
iotdata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdata AwsProvider#iotdata}

---

##### `iotdataplane`<sup>Optional</sup> <a name="iotdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdataplane"></a>

```python
iotdataplane: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdataplane AwsProvider#iotdataplane}

---

##### `iotdeviceadvisor`<sup>Optional</sup> <a name="iotdeviceadvisor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotdeviceadvisor"></a>

```python
iotdeviceadvisor: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotdeviceadvisor AwsProvider#iotdeviceadvisor}

---

##### `iotevents`<sup>Optional</sup> <a name="iotevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotevents"></a>

```python
iotevents: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotevents AwsProvider#iotevents}

---

##### `ioteventsdata`<sup>Optional</sup> <a name="ioteventsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ioteventsdata"></a>

```python
ioteventsdata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ioteventsdata AwsProvider#ioteventsdata}

---

##### `iotfleethub`<sup>Optional</sup> <a name="iotfleethub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotfleethub"></a>

```python
iotfleethub: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotfleethub AwsProvider#iotfleethub}

---

##### `iotjobsdata`<sup>Optional</sup> <a name="iotjobsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdata"></a>

```python
iotjobsdata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdata AwsProvider#iotjobsdata}

---

##### `iotjobsdataplane`<sup>Optional</sup> <a name="iotjobsdataplane" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotjobsdataplane"></a>

```python
iotjobsdataplane: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotjobsdataplane AwsProvider#iotjobsdataplane}

---

##### `iotsecuretunneling`<sup>Optional</sup> <a name="iotsecuretunneling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsecuretunneling"></a>

```python
iotsecuretunneling: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsecuretunneling AwsProvider#iotsecuretunneling}

---

##### `iotsitewise`<sup>Optional</sup> <a name="iotsitewise" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotsitewise"></a>

```python
iotsitewise: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotsitewise AwsProvider#iotsitewise}

---

##### `iotthingsgraph`<sup>Optional</sup> <a name="iotthingsgraph" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotthingsgraph"></a>

```python
iotthingsgraph: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotthingsgraph AwsProvider#iotthingsgraph}

---

##### `iottwinmaker`<sup>Optional</sup> <a name="iottwinmaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iottwinmaker"></a>

```python
iottwinmaker: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iottwinmaker AwsProvider#iottwinmaker}

---

##### `iotwireless`<sup>Optional</sup> <a name="iotwireless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.iotwireless"></a>

```python
iotwireless: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotwireless AwsProvider#iotwireless}

---

##### `ivs`<sup>Optional</sup> <a name="ivs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivs"></a>

```python
ivs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivs AwsProvider#ivs}

---

##### `ivschat`<sup>Optional</sup> <a name="ivschat" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ivschat"></a>

```python
ivschat: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ivschat AwsProvider#ivschat}

---

##### `kafka`<sup>Optional</sup> <a name="kafka" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafka"></a>

```python
kafka: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafka AwsProvider#kafka}

---

##### `kafkaconnect`<sup>Optional</sup> <a name="kafkaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kafkaconnect"></a>

```python
kafkaconnect: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafkaconnect AwsProvider#kafkaconnect}

---

##### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kendra"></a>

```python
kendra: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kendra AwsProvider#kendra}

---

##### `keyspaces`<sup>Optional</sup> <a name="keyspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.keyspaces"></a>

```python
keyspaces: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keyspaces AwsProvider#keyspaces}

---

##### `kinesis`<sup>Optional</sup> <a name="kinesis" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesis"></a>

```python
kinesis: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesis AwsProvider#kinesis}

---

##### `kinesisanalytics`<sup>Optional</sup> <a name="kinesisanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalytics"></a>

```python
kinesisanalytics: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalytics AwsProvider#kinesisanalytics}

---

##### `kinesisanalyticsv2`<sup>Optional</sup> <a name="kinesisanalyticsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisanalyticsv2"></a>

```python
kinesisanalyticsv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}

---

##### `kinesisvideo`<sup>Optional</sup> <a name="kinesisvideo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideo"></a>

```python
kinesisvideo: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideo AwsProvider#kinesisvideo}

---

##### `kinesisvideoarchivedmedia`<sup>Optional</sup> <a name="kinesisvideoarchivedmedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia"></a>

```python
kinesisvideoarchivedmedia: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideoarchivedmedia AwsProvider#kinesisvideoarchivedmedia}

---

##### `kinesisvideomedia`<sup>Optional</sup> <a name="kinesisvideomedia" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideomedia"></a>

```python
kinesisvideomedia: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideomedia AwsProvider#kinesisvideomedia}

---

##### `kinesisvideosignaling`<sup>Optional</sup> <a name="kinesisvideosignaling" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignaling"></a>

```python
kinesisvideosignaling: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignaling AwsProvider#kinesisvideosignaling}

---

##### `kinesisvideosignalingchannels`<sup>Optional</sup> <a name="kinesisvideosignalingchannels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels"></a>

```python
kinesisvideosignalingchannels: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideosignalingchannels AwsProvider#kinesisvideosignalingchannels}

---

##### `kms`<sup>Optional</sup> <a name="kms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.kms"></a>

```python
kms: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kms AwsProvider#kms}

---

##### `lakeformation`<sup>Optional</sup> <a name="lakeformation" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lakeformation"></a>

```python
lakeformation: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lakeformation AwsProvider#lakeformation}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lambda AwsProvider#lambda}

---

##### `lex`<sup>Optional</sup> <a name="lex" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lex"></a>

```python
lex: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lex AwsProvider#lex}

---

##### `lexmodelbuilding`<sup>Optional</sup> <a name="lexmodelbuilding" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuilding"></a>

```python
lexmodelbuilding: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuilding AwsProvider#lexmodelbuilding}

---

##### `lexmodelbuildingservice`<sup>Optional</sup> <a name="lexmodelbuildingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelbuildingservice"></a>

```python
lexmodelbuildingservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}

---

##### `lexmodels`<sup>Optional</sup> <a name="lexmodels" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodels"></a>

```python
lexmodels: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodels AwsProvider#lexmodels}

---

##### `lexmodelsv2`<sup>Optional</sup> <a name="lexmodelsv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexmodelsv2"></a>

```python
lexmodelsv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodelsv2 AwsProvider#lexmodelsv2}

---

##### `lexruntime`<sup>Optional</sup> <a name="lexruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntime"></a>

```python
lexruntime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntime AwsProvider#lexruntime}

---

##### `lexruntimeservice`<sup>Optional</sup> <a name="lexruntimeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimeservice"></a>

```python
lexruntimeservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimeservice AwsProvider#lexruntimeservice}

---

##### `lexruntimev2`<sup>Optional</sup> <a name="lexruntimev2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexruntimev2"></a>

```python
lexruntimev2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexruntimev2 AwsProvider#lexruntimev2}

---

##### `lexv2_models`<sup>Optional</sup> <a name="lexv2_models" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Models"></a>

```python
lexv2_models: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2models AwsProvider#lexv2models}

---

##### `lexv2_runtime`<sup>Optional</sup> <a name="lexv2_runtime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lexv2Runtime"></a>

```python
lexv2_runtime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexv2runtime AwsProvider#lexv2runtime}

---

##### `licensemanager`<sup>Optional</sup> <a name="licensemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.licensemanager"></a>

```python
licensemanager: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#licensemanager AwsProvider#licensemanager}

---

##### `lightsail`<sup>Optional</sup> <a name="lightsail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lightsail"></a>

```python
lightsail: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lightsail AwsProvider#lightsail}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.location"></a>

```python
location: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#location AwsProvider#location}

---

##### `locationservice`<sup>Optional</sup> <a name="locationservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.locationservice"></a>

```python
locationservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#locationservice AwsProvider#locationservice}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.logs"></a>

```python
logs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#logs AwsProvider#logs}

---

##### `lookoutequipment`<sup>Optional</sup> <a name="lookoutequipment" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutequipment"></a>

```python
lookoutequipment: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutequipment AwsProvider#lookoutequipment}

---

##### `lookoutforvision`<sup>Optional</sup> <a name="lookoutforvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutforvision"></a>

```python
lookoutforvision: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutforvision AwsProvider#lookoutforvision}

---

##### `lookoutmetrics`<sup>Optional</sup> <a name="lookoutmetrics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutmetrics"></a>

```python
lookoutmetrics: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutmetrics AwsProvider#lookoutmetrics}

---

##### `lookoutvision`<sup>Optional</sup> <a name="lookoutvision" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.lookoutvision"></a>

```python
lookoutvision: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lookoutvision AwsProvider#lookoutvision}

---

##### `machinelearning`<sup>Optional</sup> <a name="machinelearning" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.machinelearning"></a>

```python
machinelearning: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#machinelearning AwsProvider#machinelearning}

---

##### `macie`<sup>Optional</sup> <a name="macie" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie"></a>

```python
macie: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie AwsProvider#macie}

---

##### `macie2`<sup>Optional</sup> <a name="macie2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.macie2"></a>

```python
macie2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie2 AwsProvider#macie2}

---

##### `managedblockchain`<sup>Optional</sup> <a name="managedblockchain" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedblockchain"></a>

```python
managedblockchain: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedblockchain AwsProvider#managedblockchain}

---

##### `managedgrafana`<sup>Optional</sup> <a name="managedgrafana" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.managedgrafana"></a>

```python
managedgrafana: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedgrafana AwsProvider#managedgrafana}

---

##### `marketplacecatalog`<sup>Optional</sup> <a name="marketplacecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecatalog"></a>

```python
marketplacecatalog: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecatalog AwsProvider#marketplacecatalog}

---

##### `marketplacecommerceanalytics`<sup>Optional</sup> <a name="marketplacecommerceanalytics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics"></a>

```python
marketplacecommerceanalytics: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecommerceanalytics AwsProvider#marketplacecommerceanalytics}

---

##### `marketplaceentitlement`<sup>Optional</sup> <a name="marketplaceentitlement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlement"></a>

```python
marketplaceentitlement: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlement AwsProvider#marketplaceentitlement}

---

##### `marketplaceentitlementservice`<sup>Optional</sup> <a name="marketplaceentitlementservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplaceentitlementservice"></a>

```python
marketplaceentitlementservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplaceentitlementservice AwsProvider#marketplaceentitlementservice}

---

##### `marketplacemetering`<sup>Optional</sup> <a name="marketplacemetering" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.marketplacemetering"></a>

```python
marketplacemetering: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacemetering AwsProvider#marketplacemetering}

---

##### `mediaconnect`<sup>Optional</sup> <a name="mediaconnect" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconnect"></a>

```python
mediaconnect: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconnect AwsProvider#mediaconnect}

---

##### `mediaconvert`<sup>Optional</sup> <a name="mediaconvert" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediaconvert"></a>

```python
mediaconvert: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconvert AwsProvider#mediaconvert}

---

##### `medialive`<sup>Optional</sup> <a name="medialive" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.medialive"></a>

```python
medialive: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#medialive AwsProvider#medialive}

---

##### `mediapackage`<sup>Optional</sup> <a name="mediapackage" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackage"></a>

```python
mediapackage: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackage AwsProvider#mediapackage}

---

##### `mediapackagevod`<sup>Optional</sup> <a name="mediapackagevod" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediapackagevod"></a>

```python
mediapackagevod: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackagevod AwsProvider#mediapackagevod}

---

##### `mediastore`<sup>Optional</sup> <a name="mediastore" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastore"></a>

```python
mediastore: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastore AwsProvider#mediastore}

---

##### `mediastoredata`<sup>Optional</sup> <a name="mediastoredata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediastoredata"></a>

```python
mediastoredata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastoredata AwsProvider#mediastoredata}

---

##### `mediatailor`<sup>Optional</sup> <a name="mediatailor" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mediatailor"></a>

```python
mediatailor: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediatailor AwsProvider#mediatailor}

---

##### `memorydb`<sup>Optional</sup> <a name="memorydb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.memorydb"></a>

```python
memorydb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#memorydb AwsProvider#memorydb}

---

##### `meteringmarketplace`<sup>Optional</sup> <a name="meteringmarketplace" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.meteringmarketplace"></a>

```python
meteringmarketplace: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#meteringmarketplace AwsProvider#meteringmarketplace}

---

##### `mgh`<sup>Optional</sup> <a name="mgh" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgh"></a>

```python
mgh: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgh AwsProvider#mgh}

---

##### `mgn`<sup>Optional</sup> <a name="mgn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mgn"></a>

```python
mgn: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mgn AwsProvider#mgn}

---

##### `migrationhub`<sup>Optional</sup> <a name="migrationhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhub"></a>

```python
migrationhub: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhub AwsProvider#migrationhub}

---

##### `migrationhubconfig`<sup>Optional</sup> <a name="migrationhubconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubconfig"></a>

```python
migrationhubconfig: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubconfig AwsProvider#migrationhubconfig}

---

##### `migrationhubrefactorspaces`<sup>Optional</sup> <a name="migrationhubrefactorspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubrefactorspaces"></a>

```python
migrationhubrefactorspaces: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubrefactorspaces AwsProvider#migrationhubrefactorspaces}

---

##### `migrationhubstrategy`<sup>Optional</sup> <a name="migrationhubstrategy" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategy"></a>

```python
migrationhubstrategy: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategy AwsProvider#migrationhubstrategy}

---

##### `migrationhubstrategyrecommendations`<sup>Optional</sup> <a name="migrationhubstrategyrecommendations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.migrationhubstrategyrecommendations"></a>

```python
migrationhubstrategyrecommendations: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#migrationhubstrategyrecommendations AwsProvider#migrationhubstrategyrecommendations}

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mobile"></a>

```python
mobile: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mobile AwsProvider#mobile}

---

##### `mq`<sup>Optional</sup> <a name="mq" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mq"></a>

```python
mq: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mq AwsProvider#mq}

---

##### `msk`<sup>Optional</sup> <a name="msk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.msk"></a>

```python
msk: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#msk AwsProvider#msk}

---

##### `mturk`<sup>Optional</sup> <a name="mturk" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mturk"></a>

```python
mturk: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mturk AwsProvider#mturk}

---

##### `mwaa`<sup>Optional</sup> <a name="mwaa" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.mwaa"></a>

```python
mwaa: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mwaa AwsProvider#mwaa}

---

##### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.neptune"></a>

```python
neptune: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#neptune AwsProvider#neptune}

---

##### `networkfirewall`<sup>Optional</sup> <a name="networkfirewall" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkfirewall"></a>

```python
networkfirewall: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkfirewall AwsProvider#networkfirewall}

---

##### `networkmanager`<sup>Optional</sup> <a name="networkmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.networkmanager"></a>

```python
networkmanager: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkmanager AwsProvider#networkmanager}

---

##### `nimble`<sup>Optional</sup> <a name="nimble" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimble"></a>

```python
nimble: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimble AwsProvider#nimble}

---

##### `nimblestudio`<sup>Optional</sup> <a name="nimblestudio" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.nimblestudio"></a>

```python
nimblestudio: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#nimblestudio AwsProvider#nimblestudio}

---

##### `oam`<sup>Optional</sup> <a name="oam" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.oam"></a>

```python
oam: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#oam AwsProvider#oam}

---

##### `opensearch`<sup>Optional</sup> <a name="opensearch" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearch"></a>

```python
opensearch: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearch AwsProvider#opensearch}

---

##### `opensearchserverless`<sup>Optional</sup> <a name="opensearchserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchserverless"></a>

```python
opensearchserverless: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchserverless AwsProvider#opensearchserverless}

---

##### `opensearchservice`<sup>Optional</sup> <a name="opensearchservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opensearchservice"></a>

```python
opensearchservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opensearchservice AwsProvider#opensearchservice}

---

##### `opsworks`<sup>Optional</sup> <a name="opsworks" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworks"></a>

```python
opsworks: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworks AwsProvider#opsworks}

---

##### `opsworkscm`<sup>Optional</sup> <a name="opsworkscm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.opsworkscm"></a>

```python
opsworkscm: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworkscm AwsProvider#opsworkscm}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.organizations"></a>

```python
organizations: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#organizations AwsProvider#organizations}

---

##### `outposts`<sup>Optional</sup> <a name="outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.outposts"></a>

```python
outposts: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#outposts AwsProvider#outposts}

---

##### `panorama`<sup>Optional</sup> <a name="panorama" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.panorama"></a>

```python
panorama: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#panorama AwsProvider#panorama}

---

##### `personalize`<sup>Optional</sup> <a name="personalize" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalize"></a>

```python
personalize: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalize AwsProvider#personalize}

---

##### `personalizeevents`<sup>Optional</sup> <a name="personalizeevents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeevents"></a>

```python
personalizeevents: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeevents AwsProvider#personalizeevents}

---

##### `personalizeruntime`<sup>Optional</sup> <a name="personalizeruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.personalizeruntime"></a>

```python
personalizeruntime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalizeruntime AwsProvider#personalizeruntime}

---

##### `pi`<sup>Optional</sup> <a name="pi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pi"></a>

```python
pi: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pi AwsProvider#pi}

---

##### `pinpoint`<sup>Optional</sup> <a name="pinpoint" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpoint"></a>

```python
pinpoint: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpoint AwsProvider#pinpoint}

---

##### `pinpointemail`<sup>Optional</sup> <a name="pinpointemail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointemail"></a>

```python
pinpointemail: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointemail AwsProvider#pinpointemail}

---

##### `pinpointsmsvoice`<sup>Optional</sup> <a name="pinpointsmsvoice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pinpointsmsvoice"></a>

```python
pinpointsmsvoice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpointsmsvoice AwsProvider#pinpointsmsvoice}

---

##### `pipes`<sup>Optional</sup> <a name="pipes" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pipes"></a>

```python
pipes: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pipes AwsProvider#pipes}

---

##### `polly`<sup>Optional</sup> <a name="polly" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.polly"></a>

```python
polly: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#polly AwsProvider#polly}

---

##### `pricing`<sup>Optional</sup> <a name="pricing" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.pricing"></a>

```python
pricing: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pricing AwsProvider#pricing}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheus"></a>

```python
prometheus: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheus AwsProvider#prometheus}

---

##### `prometheusservice`<sup>Optional</sup> <a name="prometheusservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.prometheusservice"></a>

```python
prometheusservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#prometheusservice AwsProvider#prometheusservice}

---

##### `proton`<sup>Optional</sup> <a name="proton" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.proton"></a>

```python
proton: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#proton AwsProvider#proton}

---

##### `qldb`<sup>Optional</sup> <a name="qldb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldb"></a>

```python
qldb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldb AwsProvider#qldb}

---

##### `qldbsession`<sup>Optional</sup> <a name="qldbsession" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.qldbsession"></a>

```python
qldbsession: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldbsession AwsProvider#qldbsession}

---

##### `quicksight`<sup>Optional</sup> <a name="quicksight" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.quicksight"></a>

```python
quicksight: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#quicksight AwsProvider#quicksight}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ram"></a>

```python
ram: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ram AwsProvider#ram}

---

##### `rbin`<sup>Optional</sup> <a name="rbin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rbin"></a>

```python
rbin: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rbin AwsProvider#rbin}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rds"></a>

```python
rds: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rds AwsProvider#rds}

---

##### `rdsdata`<sup>Optional</sup> <a name="rdsdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdata"></a>

```python
rdsdata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdata AwsProvider#rdsdata}

---

##### `rdsdataservice`<sup>Optional</sup> <a name="rdsdataservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rdsdataservice"></a>

```python
rdsdataservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rdsdataservice AwsProvider#rdsdataservice}

---

##### `recyclebin`<sup>Optional</sup> <a name="recyclebin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.recyclebin"></a>

```python
recyclebin: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#recyclebin AwsProvider#recyclebin}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshift"></a>

```python
redshift: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshift AwsProvider#redshift}

---

##### `redshiftdata`<sup>Optional</sup> <a name="redshiftdata" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdata"></a>

```python
redshiftdata: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdata AwsProvider#redshiftdata}

---

##### `redshiftdataapiservice`<sup>Optional</sup> <a name="redshiftdataapiservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftdataapiservice"></a>

```python
redshiftdataapiservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftdataapiservice AwsProvider#redshiftdataapiservice}

---

##### `redshiftserverless`<sup>Optional</sup> <a name="redshiftserverless" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.redshiftserverless"></a>

```python
redshiftserverless: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshiftserverless AwsProvider#redshiftserverless}

---

##### `rekognition`<sup>Optional</sup> <a name="rekognition" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rekognition"></a>

```python
rekognition: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rekognition AwsProvider#rekognition}

---

##### `resiliencehub`<sup>Optional</sup> <a name="resiliencehub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resiliencehub"></a>

```python
resiliencehub: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resiliencehub AwsProvider#resiliencehub}

---

##### `resourceexplorer2`<sup>Optional</sup> <a name="resourceexplorer2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourceexplorer2"></a>

```python
resourceexplorer2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourceexplorer2 AwsProvider#resourceexplorer2}

---

##### `resourcegroups`<sup>Optional</sup> <a name="resourcegroups" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroups"></a>

```python
resourcegroups: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroups AwsProvider#resourcegroups}

---

##### `resourcegroupstagging`<sup>Optional</sup> <a name="resourcegroupstagging" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstagging"></a>

```python
resourcegroupstagging: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstagging AwsProvider#resourcegroupstagging}

---

##### `resourcegroupstaggingapi`<sup>Optional</sup> <a name="resourcegroupstaggingapi" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi"></a>

```python
resourcegroupstaggingapi: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}

---

##### `robomaker`<sup>Optional</sup> <a name="robomaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.robomaker"></a>

```python
robomaker: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#robomaker AwsProvider#robomaker}

---

##### `rolesanywhere`<sup>Optional</sup> <a name="rolesanywhere" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rolesanywhere"></a>

```python
rolesanywhere: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rolesanywhere AwsProvider#rolesanywhere}

---

##### `route53`<sup>Optional</sup> <a name="route53" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53"></a>

```python
route53: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53 AwsProvider#route53}

---

##### `route53_domains`<sup>Optional</sup> <a name="route53_domains" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Domains"></a>

```python
route53_domains: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53domains AwsProvider#route53domains}

---

##### `route53_recoverycluster`<sup>Optional</sup> <a name="route53_recoverycluster" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycluster"></a>

```python
route53_recoverycluster: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycluster AwsProvider#route53recoverycluster}

---

##### `route53_recoverycontrolconfig`<sup>Optional</sup> <a name="route53_recoverycontrolconfig" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig"></a>

```python
route53_recoverycontrolconfig: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}

---

##### `route53_recoveryreadiness`<sup>Optional</sup> <a name="route53_recoveryreadiness" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Recoveryreadiness"></a>

```python
route53_recoveryreadiness: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53recoveryreadiness AwsProvider#route53recoveryreadiness}

---

##### `route53_resolver`<sup>Optional</sup> <a name="route53_resolver" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.route53Resolver"></a>

```python
route53_resolver: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53resolver AwsProvider#route53resolver}

---

##### `rum`<sup>Optional</sup> <a name="rum" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.rum"></a>

```python
rum: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rum AwsProvider#rum}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3"></a>

```python
s3: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3 AwsProvider#s3}

---

##### `s3_api`<sup>Optional</sup> <a name="s3_api" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Api"></a>

```python
s3_api: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3api AwsProvider#s3api}

---

##### `s3_control`<sup>Optional</sup> <a name="s3_control" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Control"></a>

```python
s3_control: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3control AwsProvider#s3control}

---

##### `s3_outposts`<sup>Optional</sup> <a name="s3_outposts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.s3Outposts"></a>

```python
s3_outposts: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3outposts AwsProvider#s3outposts}

---

##### `sagemaker`<sup>Optional</sup> <a name="sagemaker" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemaker"></a>

```python
sagemaker: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemaker AwsProvider#sagemaker}

---

##### `sagemakera2_iruntime`<sup>Optional</sup> <a name="sagemakera2_iruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakera2Iruntime"></a>

```python
sagemakera2_iruntime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakera2iruntime AwsProvider#sagemakera2iruntime}

---

##### `sagemakeredge`<sup>Optional</sup> <a name="sagemakeredge" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredge"></a>

```python
sagemakeredge: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredge AwsProvider#sagemakeredge}

---

##### `sagemakeredgemanager`<sup>Optional</sup> <a name="sagemakeredgemanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakeredgemanager"></a>

```python
sagemakeredgemanager: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakeredgemanager AwsProvider#sagemakeredgemanager}

---

##### `sagemakerfeaturestoreruntime`<sup>Optional</sup> <a name="sagemakerfeaturestoreruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime"></a>

```python
sagemakerfeaturestoreruntime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerfeaturestoreruntime AwsProvider#sagemakerfeaturestoreruntime}

---

##### `sagemakerruntime`<sup>Optional</sup> <a name="sagemakerruntime" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sagemakerruntime"></a>

```python
sagemakerruntime: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemakerruntime AwsProvider#sagemakerruntime}

---

##### `savingsplans`<sup>Optional</sup> <a name="savingsplans" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.savingsplans"></a>

```python
savingsplans: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#savingsplans AwsProvider#savingsplans}

---

##### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.scheduler"></a>

```python
scheduler: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#scheduler AwsProvider#scheduler}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.schemas"></a>

```python
schemas: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#schemas AwsProvider#schemas}

---

##### `sdb`<sup>Optional</sup> <a name="sdb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sdb"></a>

```python
sdb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sdb AwsProvider#sdb}

---

##### `secretsmanager`<sup>Optional</sup> <a name="secretsmanager" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.secretsmanager"></a>

```python
secretsmanager: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secretsmanager AwsProvider#secretsmanager}

---

##### `securityhub`<sup>Optional</sup> <a name="securityhub" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.securityhub"></a>

```python
securityhub: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#securityhub AwsProvider#securityhub}

---

##### `serverlessapplicationrepository`<sup>Optional</sup> <a name="serverlessapplicationrepository" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapplicationrepository"></a>

```python
serverlessapplicationrepository: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}

---

##### `serverlessapprepo`<sup>Optional</sup> <a name="serverlessapprepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessapprepo"></a>

```python
serverlessapprepo: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessapprepo AwsProvider#serverlessapprepo}

---

##### `serverlessrepo`<sup>Optional</sup> <a name="serverlessrepo" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.serverlessrepo"></a>

```python
serverlessrepo: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessrepo AwsProvider#serverlessrepo}

---

##### `servicecatalog`<sup>Optional</sup> <a name="servicecatalog" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalog"></a>

```python
servicecatalog: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalog AwsProvider#servicecatalog}

---

##### `servicecatalogappregistry`<sup>Optional</sup> <a name="servicecatalogappregistry" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicecatalogappregistry"></a>

```python
servicecatalogappregistry: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalogappregistry AwsProvider#servicecatalogappregistry}

---

##### `servicediscovery`<sup>Optional</sup> <a name="servicediscovery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicediscovery"></a>

```python
servicediscovery: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicediscovery AwsProvider#servicediscovery}

---

##### `servicequotas`<sup>Optional</sup> <a name="servicequotas" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.servicequotas"></a>

```python
servicequotas: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicequotas AwsProvider#servicequotas}

---

##### `ses`<sup>Optional</sup> <a name="ses" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ses"></a>

```python
ses: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ses AwsProvider#ses}

---

##### `sesv2`<sup>Optional</sup> <a name="sesv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sesv2"></a>

```python
sesv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sesv2 AwsProvider#sesv2}

---

##### `sfn`<sup>Optional</sup> <a name="sfn" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sfn"></a>

```python
sfn: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sfn AwsProvider#sfn}

---

##### `shield`<sup>Optional</sup> <a name="shield" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.shield"></a>

```python
shield: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shield AwsProvider#shield}

---

##### `signer`<sup>Optional</sup> <a name="signer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.signer"></a>

```python
signer: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#signer AwsProvider#signer}

---

##### `simpledb`<sup>Optional</sup> <a name="simpledb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.simpledb"></a>

```python
simpledb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#simpledb AwsProvider#simpledb}

---

##### `sms`<sup>Optional</sup> <a name="sms" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sms"></a>

```python
sms: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sms AwsProvider#sms}

---

##### `snowball`<sup>Optional</sup> <a name="snowball" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowball"></a>

```python
snowball: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowball AwsProvider#snowball}

---

##### `snowdevicemanagement`<sup>Optional</sup> <a name="snowdevicemanagement" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.snowdevicemanagement"></a>

```python
snowdevicemanagement: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#snowdevicemanagement AwsProvider#snowdevicemanagement}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sns"></a>

```python
sns: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sns AwsProvider#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sqs"></a>

```python
sqs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sqs AwsProvider#sqs}

---

##### `ssm`<sup>Optional</sup> <a name="ssm" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssm"></a>

```python
ssm: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssm AwsProvider#ssm}

---

##### `ssmcontacts`<sup>Optional</sup> <a name="ssmcontacts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmcontacts"></a>

```python
ssmcontacts: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmcontacts AwsProvider#ssmcontacts}

---

##### `ssmincidents`<sup>Optional</sup> <a name="ssmincidents" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssmincidents"></a>

```python
ssmincidents: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssmincidents AwsProvider#ssmincidents}

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sso"></a>

```python
sso: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sso AwsProvider#sso}

---

##### `ssoadmin`<sup>Optional</sup> <a name="ssoadmin" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssoadmin"></a>

```python
ssoadmin: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssoadmin AwsProvider#ssoadmin}

---

##### `ssooidc`<sup>Optional</sup> <a name="ssooidc" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.ssooidc"></a>

```python
ssooidc: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssooidc AwsProvider#ssooidc}

---

##### `stepfunctions`<sup>Optional</sup> <a name="stepfunctions" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.stepfunctions"></a>

```python
stepfunctions: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#stepfunctions AwsProvider#stepfunctions}

---

##### `storagegateway`<sup>Optional</sup> <a name="storagegateway" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.storagegateway"></a>

```python
storagegateway: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#storagegateway AwsProvider#storagegateway}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.sts"></a>

```python
sts: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts AwsProvider#sts}

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.support"></a>

```python
support: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#support AwsProvider#support}

---

##### `swf`<sup>Optional</sup> <a name="swf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.swf"></a>

```python
swf: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#swf AwsProvider#swf}

---

##### `synthetics`<sup>Optional</sup> <a name="synthetics" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.synthetics"></a>

```python
synthetics: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#synthetics AwsProvider#synthetics}

---

##### `textract`<sup>Optional</sup> <a name="textract" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.textract"></a>

```python
textract: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#textract AwsProvider#textract}

---

##### `timestreamquery`<sup>Optional</sup> <a name="timestreamquery" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamquery"></a>

```python
timestreamquery: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamquery AwsProvider#timestreamquery}

---

##### `timestreamwrite`<sup>Optional</sup> <a name="timestreamwrite" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.timestreamwrite"></a>

```python
timestreamwrite: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamwrite AwsProvider#timestreamwrite}

---

##### `transcribe`<sup>Optional</sup> <a name="transcribe" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribe"></a>

```python
transcribe: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribe AwsProvider#transcribe}

---

##### `transcribeservice`<sup>Optional</sup> <a name="transcribeservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribeservice"></a>

```python
transcribeservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribeservice AwsProvider#transcribeservice}

---

##### `transcribestreaming`<sup>Optional</sup> <a name="transcribestreaming" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreaming"></a>

```python
transcribestreaming: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreaming AwsProvider#transcribestreaming}

---

##### `transcribestreamingservice`<sup>Optional</sup> <a name="transcribestreamingservice" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transcribestreamingservice"></a>

```python
transcribestreamingservice: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transcribestreamingservice AwsProvider#transcribestreamingservice}

---

##### `transfer`<sup>Optional</sup> <a name="transfer" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.transfer"></a>

```python
transfer: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transfer AwsProvider#transfer}

---

##### `translate`<sup>Optional</sup> <a name="translate" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.translate"></a>

```python
translate: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#translate AwsProvider#translate}

---

##### `voiceid`<sup>Optional</sup> <a name="voiceid" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.voiceid"></a>

```python
voiceid: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#voiceid AwsProvider#voiceid}

---

##### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.waf"></a>

```python
waf: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#waf AwsProvider#waf}

---

##### `wafregional`<sup>Optional</sup> <a name="wafregional" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafregional"></a>

```python
wafregional: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafregional AwsProvider#wafregional}

---

##### `wafv2`<sup>Optional</sup> <a name="wafv2" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wafv2"></a>

```python
wafv2: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafv2 AwsProvider#wafv2}

---

##### `wellarchitected`<sup>Optional</sup> <a name="wellarchitected" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wellarchitected"></a>

```python
wellarchitected: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wellarchitected AwsProvider#wellarchitected}

---

##### `wisdom`<sup>Optional</sup> <a name="wisdom" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.wisdom"></a>

```python
wisdom: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wisdom AwsProvider#wisdom}

---

##### `workdocs`<sup>Optional</sup> <a name="workdocs" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workdocs"></a>

```python
workdocs: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workdocs AwsProvider#workdocs}

---

##### `worklink`<sup>Optional</sup> <a name="worklink" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.worklink"></a>

```python
worklink: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#worklink AwsProvider#worklink}

---

##### `workmail`<sup>Optional</sup> <a name="workmail" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmail"></a>

```python
workmail: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmail AwsProvider#workmail}

---

##### `workmailmessageflow`<sup>Optional</sup> <a name="workmailmessageflow" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workmailmessageflow"></a>

```python
workmailmessageflow: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmailmessageflow AwsProvider#workmailmessageflow}

---

##### `workspaces`<sup>Optional</sup> <a name="workspaces" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspaces"></a>

```python
workspaces: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspaces AwsProvider#workspaces}

---

##### `workspacesweb`<sup>Optional</sup> <a name="workspacesweb" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.workspacesweb"></a>

```python
workspacesweb: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspacesweb AwsProvider#workspacesweb}

---

##### `xray`<sup>Optional</sup> <a name="xray" id="@cdktf/provider-aws.provider.AwsProviderEndpoints.property.xray"></a>

```python
xray: str
```

- *Type:* str

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#xray AwsProvider#xray}

---

### AwsProviderIgnoreTags <a name="AwsProviderIgnoreTags" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import provider

provider.AwsProviderIgnoreTags(
  key_prefixes: typing.List[str] = None,
  keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes">key_prefixes</a></code> | <code>typing.List[str]</code> | Resource tag key prefixes to ignore across all resources. |
| <code><a href="#@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys">keys</a></code> | <code>typing.List[str]</code> | Resource tag keys to ignore across all resources. |

---

##### `key_prefixes`<sup>Optional</sup> <a name="key_prefixes" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keyPrefixes"></a>

```python
key_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Resource tag key prefixes to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#key_prefixes AwsProvider#key_prefixes}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-aws.provider.AwsProviderIgnoreTags.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

Resource tag keys to ignore across all resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keys AwsProvider#keys}

---



