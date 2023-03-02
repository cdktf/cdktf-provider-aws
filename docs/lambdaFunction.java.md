# `lambdaFunction` Submodule <a name="`lambdaFunction` Submodule" id="@cdktf/provider-aws.lambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunction <a name="LambdaFunction" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function aws_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunction;

LambdaFunction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .functionName(java.lang.String)
    .role(java.lang.String)
//  .architectures(java.util.List<java.lang.String>)
//  .codeSigningConfigArn(java.lang.String)
//  .deadLetterConfig(LambdaFunctionDeadLetterConfig)
//  .description(java.lang.String)
//  .environment(LambdaFunctionEnvironment)
//  .ephemeralStorage(LambdaFunctionEphemeralStorage)
//  .filename(java.lang.String)
//  .fileSystemConfig(LambdaFunctionFileSystemConfig)
//  .handler(java.lang.String)
//  .id(java.lang.String)
//  .imageConfig(LambdaFunctionImageConfig)
//  .imageUri(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .layers(java.util.List<java.lang.String>)
//  .memorySize(java.lang.Number)
//  .packageType(java.lang.String)
//  .publish(java.lang.Boolean)
//  .publish(IResolvable)
//  .replacementSecurityGroupIds(java.util.List<java.lang.String>)
//  .replaceSecurityGroupsOnDestroy(java.lang.Boolean)
//  .replaceSecurityGroupsOnDestroy(IResolvable)
//  .reservedConcurrentExecutions(java.lang.Number)
//  .runtime(java.lang.String)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
//  .s3ObjectVersion(java.lang.String)
//  .snapStart(LambdaFunctionSnapStart)
//  .sourceCodeHash(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .timeouts(LambdaFunctionTimeouts)
//  .tracingConfig(LambdaFunctionTracingConfig)
//  .vpcConfig(LambdaFunctionVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | file_system_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.handler">handler</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.layers">layers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.memorySize">memorySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.packageType">packageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.publish">publish</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replacementSecurityGroupIds">replacementSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replaceSecurityGroupsOnDestroy">replaceSecurityGroupsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.snapStart">snapStart</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | snap_start block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.sourceCodeHash">sourceCodeHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | tracing_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.architectures"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}.

---

##### `codeSigningConfigArn`<sup>Optional</sup> <a name="codeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.codeSigningConfigArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}.

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.environment"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.ephemeralStorage"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.filename"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}.

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.fileSystemConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#file_system_config LambdaFunction#file_system_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.handler"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageConfig`<sup>Optional</sup> <a name="imageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_config LambdaFunction#image_config}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.imageUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.layers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.memorySize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}.

---

##### `packageType`<sup>Optional</sup> <a name="packageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.packageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.publish"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}.

---

##### `replacementSecurityGroupIds`<sup>Optional</sup> <a name="replacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replacementSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}.

---

##### `replaceSecurityGroupsOnDestroy`<sup>Optional</sup> <a name="replaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.replaceSecurityGroupsOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.reservedConcurrentExecutions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.runtime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3Key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.s3ObjectVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.snapStart"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

snap_start block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `sourceCodeHash`<sup>Optional</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.sourceCodeHash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeouts LambdaFunction#timeouts}

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.tracingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

tracing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#vpc_config LambdaFunction#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage">putEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig">putImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart">putSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig">putTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn">resetCodeSigningConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig">resetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers">resetLayers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize">resetMemorySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType">resetPackageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish">resetPublish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds">resetReplacementSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy">resetReplaceSecurityGroupsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions">resetReservedConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart">resetSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash">resetSourceCodeHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig">resetTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig"></a>

```java
public void putDeadLetterConfig(LambdaFunctionDeadLetterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment"></a>

```java
public void putEnvironment(LambdaFunctionEnvironment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `putEphemeralStorage` <a name="putEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage"></a>

```java
public void putEphemeralStorage(LambdaFunctionEphemeralStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig"></a>

```java
public void putFileSystemConfig(LambdaFunctionFileSystemConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---

##### `putImageConfig` <a name="putImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig"></a>

```java
public void putImageConfig(LambdaFunctionImageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `putSnapStart` <a name="putSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart"></a>

```java
public void putSnapStart(LambdaFunctionSnapStart value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts"></a>

```java
public void putTimeouts(LambdaFunctionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

---

##### `putTracingConfig` <a name="putTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig"></a>

```java
public void putTracingConfig(LambdaFunctionTracingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig"></a>

```java
public void putVpcConfig(LambdaFunctionVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures"></a>

```java
public void resetArchitectures()
```

##### `resetCodeSigningConfigArn` <a name="resetCodeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn"></a>

```java
public void resetCodeSigningConfigArn()
```

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig"></a>

```java
public void resetDeadLetterConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage"></a>

```java
public void resetEphemeralStorage()
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename"></a>

```java
public void resetFilename()
```

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig"></a>

```java
public void resetFileSystemConfig()
```

##### `resetHandler` <a name="resetHandler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler"></a>

```java
public void resetHandler()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId"></a>

```java
public void resetId()
```

##### `resetImageConfig` <a name="resetImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig"></a>

```java
public void resetImageConfig()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetLayers` <a name="resetLayers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers"></a>

```java
public void resetLayers()
```

##### `resetMemorySize` <a name="resetMemorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize"></a>

```java
public void resetMemorySize()
```

##### `resetPackageType` <a name="resetPackageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType"></a>

```java
public void resetPackageType()
```

##### `resetPublish` <a name="resetPublish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish"></a>

```java
public void resetPublish()
```

##### `resetReplacementSecurityGroupIds` <a name="resetReplacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds"></a>

```java
public void resetReplacementSecurityGroupIds()
```

##### `resetReplaceSecurityGroupsOnDestroy` <a name="resetReplaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy"></a>

```java
public void resetReplaceSecurityGroupsOnDestroy()
```

##### `resetReservedConcurrentExecutions` <a name="resetReservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions"></a>

```java
public void resetReservedConcurrentExecutions()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key"></a>

```java
public void resetS3Key()
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion"></a>

```java
public void resetS3ObjectVersion()
```

##### `resetSnapStart` <a name="resetSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart"></a>

```java
public void resetSnapStart()
```

##### `resetSourceCodeHash` <a name="resetSourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash"></a>

```java
public void resetSourceCodeHash()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTracingConfig` <a name="resetTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig"></a>

```java
public void resetTracingConfig()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunction;

LambdaFunction.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunction;

LambdaFunction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunction;

LambdaFunction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn">invokeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn">qualifiedArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn">qualifiedInvokeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn">signingJobArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn">signingProfileVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart">snapStart</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize">sourceCodeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput">architecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput">codeSigningConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput">handlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput">imageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput">layersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput">memorySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput">packageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput">publishInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput">replacementSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput">replaceSecurityGroupsOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput">reservedConcurrentExecutionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput">snapStartInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput">sourceCodeHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput">tracingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler">handler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers">layers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize">memorySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish">publish</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds">replacementSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy">replaceSecurityGroupsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash">sourceCodeHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig"></a>

```java
public LambdaFunctionDeadLetterConfigOutputReference getDeadLetterConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment"></a>

```java
public LambdaFunctionEnvironmentOutputReference getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage"></a>

```java
public LambdaFunctionEphemeralStorageOutputReference getEphemeralStorage();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a>

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig"></a>

```java
public LambdaFunctionFileSystemConfigOutputReference getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a>

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig"></a>

```java
public LambdaFunctionImageConfigOutputReference getImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a>

---

##### `invokeArn`<sup>Required</sup> <a name="invokeArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn"></a>

```java
public java.lang.String getInvokeArn();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `qualifiedArn`<sup>Required</sup> <a name="qualifiedArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn"></a>

```java
public java.lang.String getQualifiedArn();
```

- *Type:* java.lang.String

---

##### `qualifiedInvokeArn`<sup>Required</sup> <a name="qualifiedInvokeArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn"></a>

```java
public java.lang.String getQualifiedInvokeArn();
```

- *Type:* java.lang.String

---

##### `signingJobArn`<sup>Required</sup> <a name="signingJobArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn"></a>

```java
public java.lang.String getSigningJobArn();
```

- *Type:* java.lang.String

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="signingProfileVersionArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn"></a>

```java
public java.lang.String getSigningProfileVersionArn();
```

- *Type:* java.lang.String

---

##### `snapStart`<sup>Required</sup> <a name="snapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart"></a>

```java
public LambdaFunctionSnapStartOutputReference getSnapStart();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a>

---

##### `sourceCodeSize`<sup>Required</sup> <a name="sourceCodeSize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize"></a>

```java
public java.lang.Number getSourceCodeSize();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts"></a>

```java
public LambdaFunctionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a>

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig"></a>

```java
public LambdaFunctionTracingConfigOutputReference getTracingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig"></a>

```java
public LambdaFunctionVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a>

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput"></a>

```java
public java.util.List<java.lang.String> getArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `codeSigningConfigArnInput`<sup>Optional</sup> <a name="codeSigningConfigArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput"></a>

```java
public java.lang.String getCodeSigningConfigArnInput();
```

- *Type:* java.lang.String

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput"></a>

```java
public LambdaFunctionDeadLetterConfig getDeadLetterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput"></a>

```java
public LambdaFunctionEnvironment getEnvironmentInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput"></a>

```java
public LambdaFunctionEphemeralStorage getEphemeralStorageInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput"></a>

```java
public LambdaFunctionFileSystemConfig getFileSystemConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput"></a>

```java
public java.lang.String getHandlerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageConfigInput`<sup>Optional</sup> <a name="imageConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput"></a>

```java
public LambdaFunctionImageConfig getImageConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `layersInput`<sup>Optional</sup> <a name="layersInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput"></a>

```java
public java.util.List<java.lang.String> getLayersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memorySizeInput`<sup>Optional</sup> <a name="memorySizeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput"></a>

```java
public java.lang.Number getMemorySizeInput();
```

- *Type:* java.lang.Number

---

##### `packageTypeInput`<sup>Optional</sup> <a name="packageTypeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput"></a>

```java
public java.lang.String getPackageTypeInput();
```

- *Type:* java.lang.String

---

##### `publishInput`<sup>Optional</sup> <a name="publishInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput"></a>

```java
public java.lang.Object getPublishInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replacementSecurityGroupIdsInput`<sup>Optional</sup> <a name="replacementSecurityGroupIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getReplacementSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replaceSecurityGroupsOnDestroyInput`<sup>Optional</sup> <a name="replaceSecurityGroupsOnDestroyInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput"></a>

```java
public java.lang.Object getReplaceSecurityGroupsOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reservedConcurrentExecutionsInput`<sup>Optional</sup> <a name="reservedConcurrentExecutionsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput"></a>

```java
public java.lang.Number getReservedConcurrentExecutionsInput();
```

- *Type:* java.lang.Number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput"></a>

```java
public java.lang.String getS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `snapStartInput`<sup>Optional</sup> <a name="snapStartInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput"></a>

```java
public LambdaFunctionSnapStart getSnapStartInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `sourceCodeHashInput`<sup>Optional</sup> <a name="sourceCodeHashInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput"></a>

```java
public java.lang.String getSourceCodeHashInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `tracingConfigInput`<sup>Optional</sup> <a name="tracingConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput"></a>

```java
public LambdaFunctionTracingConfig getTracingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput"></a>

```java
public LambdaFunctionVpcConfig getVpcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="codeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn"></a>

```java
public java.lang.String getCodeSigningConfigArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `layers`<sup>Required</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers"></a>

```java
public java.util.List<java.lang.String> getLayers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize"></a>

```java
public java.lang.Number getMemorySize();
```

- *Type:* java.lang.Number

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish"></a>

```java
public java.lang.Object getPublish();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replacementSecurityGroupIds`<sup>Required</sup> <a name="replacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getReplacementSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replaceSecurityGroupsOnDestroy`<sup>Required</sup> <a name="replaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy"></a>

```java
public java.lang.Object getReplaceSecurityGroupsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reservedConcurrentExecutions`<sup>Required</sup> <a name="reservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions"></a>

```java
public java.lang.Number getReservedConcurrentExecutions();
```

- *Type:* java.lang.Number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `sourceCodeHash`<sup>Required</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash"></a>

```java
public java.lang.String getSourceCodeHash();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionConfig <a name="LambdaFunctionConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionConfig;

LambdaFunctionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .functionName(java.lang.String)
    .role(java.lang.String)
//  .architectures(java.util.List<java.lang.String>)
//  .codeSigningConfigArn(java.lang.String)
//  .deadLetterConfig(LambdaFunctionDeadLetterConfig)
//  .description(java.lang.String)
//  .environment(LambdaFunctionEnvironment)
//  .ephemeralStorage(LambdaFunctionEphemeralStorage)
//  .filename(java.lang.String)
//  .fileSystemConfig(LambdaFunctionFileSystemConfig)
//  .handler(java.lang.String)
//  .id(java.lang.String)
//  .imageConfig(LambdaFunctionImageConfig)
//  .imageUri(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .layers(java.util.List<java.lang.String>)
//  .memorySize(java.lang.Number)
//  .packageType(java.lang.String)
//  .publish(java.lang.Boolean)
//  .publish(IResolvable)
//  .replacementSecurityGroupIds(java.util.List<java.lang.String>)
//  .replaceSecurityGroupsOnDestroy(java.lang.Boolean)
//  .replaceSecurityGroupsOnDestroy(IResolvable)
//  .reservedConcurrentExecutions(java.lang.Number)
//  .runtime(java.lang.String)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
//  .s3ObjectVersion(java.lang.String)
//  .snapStart(LambdaFunctionSnapStart)
//  .sourceCodeHash(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .timeouts(LambdaFunctionTimeouts)
//  .tracingConfig(LambdaFunctionTracingConfig)
//  .vpcConfig(LambdaFunctionVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | file_system_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler">handler</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers">layers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize">memorySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType">packageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish">publish</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds">replacementSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy">replaceSecurityGroupsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart">snapStart</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | snap_start block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash">sourceCodeHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | tracing_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}.

---

##### `codeSigningConfigArn`<sup>Optional</sup> <a name="codeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn"></a>

```java
public java.lang.String getCodeSigningConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}.

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig"></a>

```java
public LambdaFunctionDeadLetterConfig getDeadLetterConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment"></a>

```java
public LambdaFunctionEnvironment getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage"></a>

```java
public LambdaFunctionEphemeralStorage getEphemeralStorage();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}.

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig"></a>

```java
public LambdaFunctionFileSystemConfig getFileSystemConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#file_system_config LambdaFunction#file_system_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageConfig`<sup>Optional</sup> <a name="imageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig"></a>

```java
public LambdaFunctionImageConfig getImageConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_config LambdaFunction#image_config}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers"></a>

```java
public java.util.List<java.lang.String> getLayers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize"></a>

```java
public java.lang.Number getMemorySize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}.

---

##### `packageType`<sup>Optional</sup> <a name="packageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish"></a>

```java
public java.lang.Object getPublish();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}.

---

##### `replacementSecurityGroupIds`<sup>Optional</sup> <a name="replacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getReplacementSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}.

---

##### `replaceSecurityGroupsOnDestroy`<sup>Optional</sup> <a name="replaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy"></a>

```java
public java.lang.Object getReplaceSecurityGroupsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions"></a>

```java
public java.lang.Number getReservedConcurrentExecutions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart"></a>

```java
public LambdaFunctionSnapStart getSnapStart();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

snap_start block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `sourceCodeHash`<sup>Optional</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash"></a>

```java
public java.lang.String getSourceCodeHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts"></a>

```java
public LambdaFunctionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeouts LambdaFunction#timeouts}

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig"></a>

```java
public LambdaFunctionTracingConfig getTracingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

tracing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig"></a>

```java
public LambdaFunctionVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#vpc_config LambdaFunction#vpc_config}

---

### LambdaFunctionDeadLetterConfig <a name="LambdaFunctionDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionDeadLetterConfig;

LambdaFunctionDeadLetterConfig.builder()
    .targetArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}. |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}.

---

### LambdaFunctionEnvironment <a name="LambdaFunctionEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionEnvironment;

LambdaFunctionEnvironment.builder()
//  .variables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}. |

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}.

---

### LambdaFunctionEphemeralStorage <a name="LambdaFunctionEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionEphemeralStorage;

LambdaFunctionEphemeralStorage.builder()
//  .size(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}.

---

### LambdaFunctionFileSystemConfig <a name="LambdaFunctionFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionFileSystemConfig;

LambdaFunctionFileSystemConfig.builder()
    .arn(java.lang.String)
    .localMountPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath">localMountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}.

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath"></a>

```java
public java.lang.String getLocalMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}.

---

### LambdaFunctionImageConfig <a name="LambdaFunctionImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionImageConfig;

LambdaFunctionImageConfig.builder()
//  .command(java.util.List<java.lang.String>)
//  .entryPoint(java.util.List<java.lang.String>)
//  .workingDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint">entryPoint</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}.

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint"></a>

```java
public java.util.List<java.lang.String> getEntryPoint();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}.

---

### LambdaFunctionSnapStart <a name="LambdaFunctionSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionSnapStart;

LambdaFunctionSnapStart.builder()
    .applyOn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn">applyOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}. |

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn"></a>

```java
public java.lang.String getApplyOn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}.

---

### LambdaFunctionTimeouts <a name="LambdaFunctionTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionTimeouts;

LambdaFunctionTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}.

---

### LambdaFunctionTracingConfig <a name="LambdaFunctionTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionTracingConfig;

LambdaFunctionTracingConfig.builder()
    .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}.

---

### LambdaFunctionVpcConfig <a name="LambdaFunctionVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionVpcConfig;

LambdaFunctionVpcConfig.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionDeadLetterConfigOutputReference <a name="LambdaFunctionDeadLetterConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionDeadLetterConfigOutputReference;

new LambdaFunctionDeadLetterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```java
public LambdaFunctionDeadLetterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---


### LambdaFunctionEnvironmentOutputReference <a name="LambdaFunctionEnvironmentOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionEnvironmentOutputReference;

new LambdaFunctionEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVariables` <a name="resetVariables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables"></a>

```java
public void resetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput">variablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```java
public LambdaFunctionEnvironment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---


### LambdaFunctionEphemeralStorageOutputReference <a name="LambdaFunctionEphemeralStorageOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionEphemeralStorageOutputReference;

new LambdaFunctionEphemeralStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize"></a>

```java
public void resetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```java
public LambdaFunctionEphemeralStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---


### LambdaFunctionFileSystemConfigOutputReference <a name="LambdaFunctionFileSystemConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionFileSystemConfigOutputReference;

new LambdaFunctionFileSystemConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput">localMountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath">localMountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `localMountPathInput`<sup>Optional</sup> <a name="localMountPathInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput"></a>

```java
public java.lang.String getLocalMountPathInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath"></a>

```java
public java.lang.String getLocalMountPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue"></a>

```java
public LambdaFunctionFileSystemConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---


### LambdaFunctionImageConfigOutputReference <a name="LambdaFunctionImageConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionImageConfigOutputReference;

new LambdaFunctionImageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint"></a>

```java
public void resetEntryPoint()
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory"></a>

```java
public void resetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint">entryPoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput"></a>

```java
public java.util.List<java.lang.String> getEntryPointInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput"></a>

```java
public java.lang.String getWorkingDirectoryInput();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```java
public java.util.List<java.lang.String> getEntryPoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```java
public LambdaFunctionImageConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---


### LambdaFunctionSnapStartOutputReference <a name="LambdaFunctionSnapStartOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionSnapStartOutputReference;

new LambdaFunctionSnapStartOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus">optimizationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput">applyOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn">applyOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optimizationStatus`<sup>Required</sup> <a name="optimizationStatus" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus"></a>

```java
public java.lang.String getOptimizationStatus();
```

- *Type:* java.lang.String

---

##### `applyOnInput`<sup>Optional</sup> <a name="applyOnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput"></a>

```java
public java.lang.String getApplyOnInput();
```

- *Type:* java.lang.String

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```java
public java.lang.String getApplyOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```java
public LambdaFunctionSnapStart getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---


### LambdaFunctionTimeoutsOutputReference <a name="LambdaFunctionTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionTimeoutsOutputReference;

new LambdaFunctionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### LambdaFunctionTracingConfigOutputReference <a name="LambdaFunctionTracingConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionTracingConfigOutputReference;

new LambdaFunctionTracingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```java
public LambdaFunctionTracingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---


### LambdaFunctionVpcConfigOutputReference <a name="LambdaFunctionVpcConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_function.LambdaFunctionVpcConfigOutputReference;

new LambdaFunctionVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```java
public LambdaFunctionVpcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---



