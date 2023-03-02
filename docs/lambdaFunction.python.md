# `lambdaFunction` Submodule <a name="`lambdaFunction` Submodule" id="@cdktf/provider-aws.lambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunction <a name="LambdaFunction" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function aws_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  role: str,
  architectures: typing.List[str] = None,
  code_signing_config_arn: str = None,
  dead_letter_config: LambdaFunctionDeadLetterConfig = None,
  description: str = None,
  environment: LambdaFunctionEnvironment = None,
  ephemeral_storage: LambdaFunctionEphemeralStorage = None,
  filename: str = None,
  file_system_config: LambdaFunctionFileSystemConfig = None,
  handler: str = None,
  id: str = None,
  image_config: LambdaFunctionImageConfig = None,
  image_uri: str = None,
  kms_key_arn: str = None,
  layers: typing.List[str] = None,
  memory_size: typing.Union[int, float] = None,
  package_type: str = None,
  publish: typing.Union[bool, IResolvable] = None,
  replacement_security_group_ids: typing.List[str] = None,
  replace_security_groups_on_destroy: typing.Union[bool, IResolvable] = None,
  reserved_concurrent_executions: typing.Union[int, float] = None,
  runtime: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_version: str = None,
  snap_start: LambdaFunctionSnapStart = None,
  source_code_hash: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  timeouts: LambdaFunctionTimeouts = None,
  tracing_config: LambdaFunctionTracingConfig = None,
  vpc_config: LambdaFunctionVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.architectures">architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.codeSigningConfigArn">code_signing_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.fileSystemConfig">file_system_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | file_system_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.handler">handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageConfig">image_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageUri">image_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.layers">layers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.packageType">package_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.publish">publish</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replacementSecurityGroupIds">replacement_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replaceSecurityGroupsOnDestroy">replace_security_groups_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.reservedConcurrentExecutions">reserved_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.snapStart">snap_start</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | snap_start block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.sourceCodeHash">source_code_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tracingConfig">tracing_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | tracing_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.architectures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}.

---

##### `code_signing_config_arn`<sup>Optional</sup> <a name="code_signing_config_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.codeSigningConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}.

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.environment"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.ephemeralStorage"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}.

---

##### `file_system_config`<sup>Optional</sup> <a name="file_system_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.fileSystemConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#file_system_config LambdaFunction#file_system_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.handler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_config LambdaFunction#image_config}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.layers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}.

---

##### `memory_size`<sup>Optional</sup> <a name="memory_size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.memorySize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}.

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.packageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.publish"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}.

---

##### `replacement_security_group_ids`<sup>Optional</sup> <a name="replacement_security_group_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replacementSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}.

---

##### `replace_security_groups_on_destroy`<sup>Optional</sup> <a name="replace_security_groups_on_destroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replaceSecurityGroupsOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}.

---

##### `reserved_concurrent_executions`<sup>Optional</sup> <a name="reserved_concurrent_executions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.reservedConcurrentExecutions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}.

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}.

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3ObjectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}.

---

##### `snap_start`<sup>Optional</sup> <a name="snap_start" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.snapStart"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

snap_start block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `source_code_hash`<sup>Optional</sup> <a name="source_code_hash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.sourceCodeHash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeouts LambdaFunction#timeouts}

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tracingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

tracing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#vpc_config LambdaFunction#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig">put_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage">put_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig">put_file_system_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig">put_image_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart">put_snap_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig">put_tracing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn">reset_code_signing_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig">reset_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig">reset_file_system_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler">reset_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig">reset_image_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers">reset_layers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize">reset_memory_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType">reset_package_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish">reset_publish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds">reset_replacement_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy">reset_replace_security_groups_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions">reset_reserved_concurrent_executions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key">reset_s3_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion">reset_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart">reset_snap_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash">reset_source_code_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig">reset_tracing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dead_letter_config` <a name="put_dead_letter_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig"></a>

```python
def put_dead_letter_config(
  target_arn: str
) -> None
```

###### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig.parameter.targetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}.

---

##### `put_environment` <a name="put_environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment"></a>

```python
def put_environment(
  variables: typing.Mapping[str] = None
) -> None
```

###### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment.parameter.variables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}.

---

##### `put_ephemeral_storage` <a name="put_ephemeral_storage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage"></a>

```python
def put_ephemeral_storage(
  size: typing.Union[int, float] = None
) -> None
```

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}.

---

##### `put_file_system_config` <a name="put_file_system_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig"></a>

```python
def put_file_system_config(
  arn: str,
  local_mount_path: str
) -> None
```

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}.

---

###### `local_mount_path`<sup>Required</sup> <a name="local_mount_path" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig.parameter.localMountPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}.

---

##### `put_image_config` <a name="put_image_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig"></a>

```python
def put_image_config(
  command: typing.List[str] = None,
  entry_point: typing.List[str] = None,
  working_directory: str = None
) -> None
```

###### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig.parameter.command"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}.

---

###### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig.parameter.entryPoint"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}.

---

###### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig.parameter.workingDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}.

---

##### `put_snap_start` <a name="put_snap_start" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart"></a>

```python
def put_snap_start(
  apply_on: str
) -> None
```

###### `apply_on`<sup>Required</sup> <a name="apply_on" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart.parameter.applyOn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}.

---

##### `put_tracing_config` <a name="put_tracing_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig"></a>

```python
def put_tracing_config(
  mode: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}.

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str]
) -> None
```

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}.

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}.

---

##### `reset_architectures` <a name="reset_architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_code_signing_config_arn` <a name="reset_code_signing_config_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn"></a>

```python
def reset_code_signing_config_arn() -> None
```

##### `reset_dead_letter_config` <a name="reset_dead_letter_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig"></a>

```python
def reset_dead_letter_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_file_system_config` <a name="reset_file_system_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig"></a>

```python
def reset_file_system_config() -> None
```

##### `reset_handler` <a name="reset_handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler"></a>

```python
def reset_handler() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_config` <a name="reset_image_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig"></a>

```python
def reset_image_config() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_layers` <a name="reset_layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers"></a>

```python
def reset_layers() -> None
```

##### `reset_memory_size` <a name="reset_memory_size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize"></a>

```python
def reset_memory_size() -> None
```

##### `reset_package_type` <a name="reset_package_type" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType"></a>

```python
def reset_package_type() -> None
```

##### `reset_publish` <a name="reset_publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish"></a>

```python
def reset_publish() -> None
```

##### `reset_replacement_security_group_ids` <a name="reset_replacement_security_group_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds"></a>

```python
def reset_replacement_security_group_ids() -> None
```

##### `reset_replace_security_groups_on_destroy` <a name="reset_replace_security_groups_on_destroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy"></a>

```python
def reset_replace_security_groups_on_destroy() -> None
```

##### `reset_reserved_concurrent_executions` <a name="reset_reserved_concurrent_executions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions"></a>

```python
def reset_reserved_concurrent_executions() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key"></a>

```python
def reset_s3_key() -> None
```

##### `reset_s3_object_version` <a name="reset_s3_object_version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion"></a>

```python
def reset_s3_object_version() -> None
```

##### `reset_snap_start` <a name="reset_snap_start" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart"></a>

```python
def reset_snap_start() -> None
```

##### `reset_source_code_hash` <a name="reset_source_code_hash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash"></a>

```python
def reset_source_code_hash() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tracing_config` <a name="reset_tracing_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig"></a>

```python
def reset_tracing_config() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig">file_system_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig">image_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn">invoke_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn">qualified_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn">qualified_invoke_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn">signing_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn">signing_profile_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart">snap_start</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize">source_code_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig">tracing_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput">code_signing_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput">dead_letter_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput">environment_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput">file_system_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput">handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput">image_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput">layers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput">memory_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput">package_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput">publish_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput">replacement_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput">replace_security_groups_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput">reserved_concurrent_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput">s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput">snap_start_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput">source_code_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput">tracing_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput">vpc_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn">code_signing_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers">layers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish">publish</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds">replacement_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy">replace_security_groups_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions">reserved_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash">source_code_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dead_letter_config`<sup>Required</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig"></a>

```python
dead_letter_config: LambdaFunctionDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment"></a>

```python
environment: LambdaFunctionEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a>

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage"></a>

```python
ephemeral_storage: LambdaFunctionEphemeralStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a>

---

##### `file_system_config`<sup>Required</sup> <a name="file_system_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig"></a>

```python
file_system_config: LambdaFunctionFileSystemConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a>

---

##### `image_config`<sup>Required</sup> <a name="image_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig"></a>

```python
image_config: LambdaFunctionImageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a>

---

##### `invoke_arn`<sup>Required</sup> <a name="invoke_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn"></a>

```python
invoke_arn: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `qualified_arn`<sup>Required</sup> <a name="qualified_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn"></a>

```python
qualified_arn: str
```

- *Type:* str

---

##### `qualified_invoke_arn`<sup>Required</sup> <a name="qualified_invoke_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn"></a>

```python
qualified_invoke_arn: str
```

- *Type:* str

---

##### `signing_job_arn`<sup>Required</sup> <a name="signing_job_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn"></a>

```python
signing_job_arn: str
```

- *Type:* str

---

##### `signing_profile_version_arn`<sup>Required</sup> <a name="signing_profile_version_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn"></a>

```python
signing_profile_version_arn: str
```

- *Type:* str

---

##### `snap_start`<sup>Required</sup> <a name="snap_start" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart"></a>

```python
snap_start: LambdaFunctionSnapStartOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a>

---

##### `source_code_size`<sup>Required</sup> <a name="source_code_size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize"></a>

```python
source_code_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts"></a>

```python
timeouts: LambdaFunctionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a>

---

##### `tracing_config`<sup>Required</sup> <a name="tracing_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig"></a>

```python
tracing_config: LambdaFunctionTracingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig"></a>

```python
vpc_config: LambdaFunctionVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a>

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `code_signing_config_arn_input`<sup>Optional</sup> <a name="code_signing_config_arn_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput"></a>

```python
code_signing_config_arn_input: str
```

- *Type:* str

---

##### `dead_letter_config_input`<sup>Optional</sup> <a name="dead_letter_config_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput"></a>

```python
dead_letter_config_input: LambdaFunctionDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput"></a>

```python
environment_input: LambdaFunctionEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: LambdaFunctionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `file_system_config_input`<sup>Optional</sup> <a name="file_system_config_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput"></a>

```python
file_system_config_input: LambdaFunctionFileSystemConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `handler_input`<sup>Optional</sup> <a name="handler_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput"></a>

```python
handler_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_config_input`<sup>Optional</sup> <a name="image_config_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput"></a>

```python
image_config_input: LambdaFunctionImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `layers_input`<sup>Optional</sup> <a name="layers_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput"></a>

```python
layers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_size_input`<sup>Optional</sup> <a name="memory_size_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput"></a>

```python
memory_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `package_type_input`<sup>Optional</sup> <a name="package_type_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput"></a>

```python
package_type_input: str
```

- *Type:* str

---

##### `publish_input`<sup>Optional</sup> <a name="publish_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput"></a>

```python
publish_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replacement_security_group_ids_input`<sup>Optional</sup> <a name="replacement_security_group_ids_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput"></a>

```python
replacement_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_security_groups_on_destroy_input`<sup>Optional</sup> <a name="replace_security_groups_on_destroy_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput"></a>

```python
replace_security_groups_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reserved_concurrent_executions_input`<sup>Optional</sup> <a name="reserved_concurrent_executions_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput"></a>

```python
reserved_concurrent_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_object_version_input`<sup>Optional</sup> <a name="s3_object_version_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput"></a>

```python
s3_object_version_input: str
```

- *Type:* str

---

##### `snap_start_input`<sup>Optional</sup> <a name="snap_start_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput"></a>

```python
snap_start_input: LambdaFunctionSnapStart
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `source_code_hash_input`<sup>Optional</sup> <a name="source_code_hash_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput"></a>

```python
source_code_hash_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LambdaFunctionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>, cdktf.IResolvable]

---

##### `tracing_config_input`<sup>Optional</sup> <a name="tracing_config_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput"></a>

```python
tracing_config_input: LambdaFunctionTracingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput"></a>

```python
vpc_config_input: LambdaFunctionVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `code_signing_config_arn`<sup>Required</sup> <a name="code_signing_config_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn"></a>

```python
code_signing_config_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `layers`<sup>Required</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers"></a>

```python
layers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish"></a>

```python
publish: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replacement_security_group_ids`<sup>Required</sup> <a name="replacement_security_group_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds"></a>

```python
replacement_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_security_groups_on_destroy`<sup>Required</sup> <a name="replace_security_groups_on_destroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy"></a>

```python
replace_security_groups_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reserved_concurrent_executions`<sup>Required</sup> <a name="reserved_concurrent_executions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions"></a>

```python
reserved_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `s3_object_version`<sup>Required</sup> <a name="s3_object_version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

---

##### `source_code_hash`<sup>Required</sup> <a name="source_code_hash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash"></a>

```python
source_code_hash: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionConfig <a name="LambdaFunctionConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  role: str,
  architectures: typing.List[str] = None,
  code_signing_config_arn: str = None,
  dead_letter_config: LambdaFunctionDeadLetterConfig = None,
  description: str = None,
  environment: LambdaFunctionEnvironment = None,
  ephemeral_storage: LambdaFunctionEphemeralStorage = None,
  filename: str = None,
  file_system_config: LambdaFunctionFileSystemConfig = None,
  handler: str = None,
  id: str = None,
  image_config: LambdaFunctionImageConfig = None,
  image_uri: str = None,
  kms_key_arn: str = None,
  layers: typing.List[str] = None,
  memory_size: typing.Union[int, float] = None,
  package_type: str = None,
  publish: typing.Union[bool, IResolvable] = None,
  replacement_security_group_ids: typing.List[str] = None,
  replace_security_groups_on_destroy: typing.Union[bool, IResolvable] = None,
  reserved_concurrent_executions: typing.Union[int, float] = None,
  runtime: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_version: str = None,
  snap_start: LambdaFunctionSnapStart = None,
  source_code_hash: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  timeouts: LambdaFunctionTimeouts = None,
  tracing_config: LambdaFunctionTracingConfig = None,
  vpc_config: LambdaFunctionVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn">code_signing_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig">file_system_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | file_system_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler">handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig">image_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri">image_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers">layers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType">package_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish">publish</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds">replacement_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy">replace_security_groups_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions">reserved_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart">snap_start</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | snap_start block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash">source_code_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig">tracing_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | tracing_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}.

---

##### `code_signing_config_arn`<sup>Optional</sup> <a name="code_signing_config_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn"></a>

```python
code_signing_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}.

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig"></a>

```python
dead_letter_config: LambdaFunctionDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment"></a>

```python
environment: LambdaFunctionEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage"></a>

```python
ephemeral_storage: LambdaFunctionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}.

---

##### `file_system_config`<sup>Optional</sup> <a name="file_system_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig"></a>

```python
file_system_config: LambdaFunctionFileSystemConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#file_system_config LambdaFunction#file_system_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler"></a>

```python
handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig"></a>

```python
image_config: LambdaFunctionImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_config LambdaFunction#image_config}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers"></a>

```python
layers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}.

---

##### `memory_size`<sup>Optional</sup> <a name="memory_size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}.

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish"></a>

```python
publish: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}.

---

##### `replacement_security_group_ids`<sup>Optional</sup> <a name="replacement_security_group_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds"></a>

```python
replacement_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}.

---

##### `replace_security_groups_on_destroy`<sup>Optional</sup> <a name="replace_security_groups_on_destroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy"></a>

```python
replace_security_groups_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}.

---

##### `reserved_concurrent_executions`<sup>Optional</sup> <a name="reserved_concurrent_executions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions"></a>

```python
reserved_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}.

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}.

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}.

---

##### `snap_start`<sup>Optional</sup> <a name="snap_start" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart"></a>

```python
snap_start: LambdaFunctionSnapStart
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

snap_start block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `source_code_hash`<sup>Optional</sup> <a name="source_code_hash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash"></a>

```python
source_code_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts"></a>

```python
timeouts: LambdaFunctionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeouts LambdaFunction#timeouts}

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig"></a>

```python
tracing_config: LambdaFunctionTracingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

tracing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig"></a>

```python
vpc_config: LambdaFunctionVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#vpc_config LambdaFunction#vpc_config}

---

### LambdaFunctionDeadLetterConfig <a name="LambdaFunctionDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionDeadLetterConfig(
  target_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}. |

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}.

---

### LambdaFunctionEnvironment <a name="LambdaFunctionEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionEnvironment(
  variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}. |

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}.

---

### LambdaFunctionEphemeralStorage <a name="LambdaFunctionEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionEphemeralStorage(
  size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}.

---

### LambdaFunctionFileSystemConfig <a name="LambdaFunctionFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionFileSystemConfig(
  arn: str,
  local_mount_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath">local_mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}.

---

##### `local_mount_path`<sup>Required</sup> <a name="local_mount_path" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath"></a>

```python
local_mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}.

---

### LambdaFunctionImageConfig <a name="LambdaFunctionImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionImageConfig(
  command: typing.List[str] = None,
  entry_point: typing.List[str] = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}.

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}.

---

### LambdaFunctionSnapStart <a name="LambdaFunctionSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionSnapStart(
  apply_on: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn">apply_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}. |

---

##### `apply_on`<sup>Required</sup> <a name="apply_on" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn"></a>

```python
apply_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}.

---

### LambdaFunctionTimeouts <a name="LambdaFunctionTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}.

---

### LambdaFunctionTracingConfig <a name="LambdaFunctionTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionTracingConfig(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}.

---

### LambdaFunctionVpcConfig <a name="LambdaFunctionVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionVpcConfig(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionDeadLetterConfigOutputReference <a name="LambdaFunctionDeadLetterConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---


### LambdaFunctionEnvironmentOutputReference <a name="LambdaFunctionEnvironmentOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_variables` <a name="reset_variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables"></a>

```python
def reset_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput">variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput"></a>

```python
variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---


### LambdaFunctionEphemeralStorageOutputReference <a name="LambdaFunctionEphemeralStorageOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionEphemeralStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize">reset_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size` <a name="reset_size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize"></a>

```python
def reset_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---


### LambdaFunctionFileSystemConfigOutputReference <a name="LambdaFunctionFileSystemConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionFileSystemConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput">local_mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath">local_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `local_mount_path_input`<sup>Optional</sup> <a name="local_mount_path_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput"></a>

```python
local_mount_path_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `local_mount_path`<sup>Required</sup> <a name="local_mount_path" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath"></a>

```python
local_mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionFileSystemConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---


### LambdaFunctionImageConfigOutputReference <a name="LambdaFunctionImageConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint">reset_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command` <a name="reset_command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_entry_point` <a name="reset_entry_point" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint"></a>

```python
def reset_entry_point() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput">entry_point_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput"></a>

```python
entry_point_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---


### LambdaFunctionSnapStartOutputReference <a name="LambdaFunctionSnapStartOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionSnapStartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus">optimization_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput">apply_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn">apply_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `optimization_status`<sup>Required</sup> <a name="optimization_status" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus"></a>

```python
optimization_status: str
```

- *Type:* str

---

##### `apply_on_input`<sup>Optional</sup> <a name="apply_on_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput"></a>

```python
apply_on_input: str
```

- *Type:* str

---

##### `apply_on`<sup>Required</sup> <a name="apply_on" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```python
apply_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionSnapStart
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---


### LambdaFunctionTimeoutsOutputReference <a name="LambdaFunctionTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LambdaFunctionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>, cdktf.IResolvable]

---


### LambdaFunctionTracingConfigOutputReference <a name="LambdaFunctionTracingConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionTracingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionTracingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---


### LambdaFunctionVpcConfigOutputReference <a name="LambdaFunctionVpcConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function

lambdaFunction.LambdaFunctionVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---



