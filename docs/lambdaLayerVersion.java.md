# `lambdaLayerVersion` Submodule <a name="`lambdaLayerVersion` Submodule" id="@cdktf/provider-aws.lambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersion <a name="LambdaLayerVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.Builder.create(Construct scope, java.lang.String id)
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
    .layerName(java.lang.String)
//  .compatibleArchitectures(java.util.List<java.lang.String>)
//  .compatibleRuntimes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .filename(java.lang.String)
//  .id(java.lang.String)
//  .licenseInfo(java.lang.String)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
//  .s3ObjectVersion(java.lang.String)
//  .skipDestroy(java.lang.Boolean)
//  .skipDestroy(IResolvable)
//  .sourceCodeHash(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName">layerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures">compatibleArchitectures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes">compatibleRuntimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo">licenseInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.skipDestroy">skipDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.sourceCodeHash">sourceCodeHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}.

---

##### `compatibleArchitectures`<sup>Optional</sup> <a name="compatibleArchitectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.filename"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3ObjectVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}.

---

##### `skipDestroy`<sup>Optional</sup> <a name="skipDestroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.skipDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}.

---

##### `sourceCodeHash`<sup>Optional</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.sourceCodeHash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures">resetCompatibleArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes">resetCompatibleRuntimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo">resetLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy">resetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash">resetSourceCodeHash</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCompatibleArchitectures` <a name="resetCompatibleArchitectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures"></a>

```java
public void resetCompatibleArchitectures()
```

##### `resetCompatibleRuntimes` <a name="resetCompatibleRuntimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes"></a>

```java
public void resetCompatibleRuntimes()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetFilename"></a>

```java
public void resetFilename()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseInfo` <a name="resetLicenseInfo" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo"></a>

```java
public void resetLicenseInfo()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Key"></a>

```java
public void resetS3Key()
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion"></a>

```java
public void resetS3ObjectVersion()
```

##### `resetSkipDestroy` <a name="resetSkipDestroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy"></a>

```java
public void resetSkipDestroy()
```

##### `resetSourceCodeHash` <a name="resetSourceCodeHash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash"></a>

```java
public void resetSourceCodeHash()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerArn">layerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn">signingJobArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn">signingProfileVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize">sourceCodeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput">compatibleArchitecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput">compatibleRuntimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput">layerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput">licenseInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput">skipDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput">sourceCodeHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerName">layerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo">licenseInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy">skipDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash">sourceCodeHash</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `layerArn`<sup>Required</sup> <a name="layerArn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerArn"></a>

```java
public java.lang.String getLayerArn();
```

- *Type:* java.lang.String

---

##### `signingJobArn`<sup>Required</sup> <a name="signingJobArn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn"></a>

```java
public java.lang.String getSigningJobArn();
```

- *Type:* java.lang.String

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="signingProfileVersionArn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn"></a>

```java
public java.lang.String getSigningProfileVersionArn();
```

- *Type:* java.lang.String

---

##### `sourceCodeSize`<sup>Required</sup> <a name="sourceCodeSize" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize"></a>

```java
public java.lang.Number getSourceCodeSize();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `compatibleArchitecturesInput`<sup>Optional</sup> <a name="compatibleArchitecturesInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput"></a>

```java
public java.util.List<java.lang.String> getCompatibleArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compatibleRuntimesInput`<sup>Optional</sup> <a name="compatibleRuntimesInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput"></a>

```java
public java.util.List<java.lang.String> getCompatibleRuntimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `layerNameInput`<sup>Optional</sup> <a name="layerNameInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput"></a>

```java
public java.lang.String getLayerNameInput();
```

- *Type:* java.lang.String

---

##### `licenseInfoInput`<sup>Optional</sup> <a name="licenseInfoInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput"></a>

```java
public java.lang.String getLicenseInfoInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput"></a>

```java
public java.lang.String getS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `skipDestroyInput`<sup>Optional</sup> <a name="skipDestroyInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput"></a>

```java
public java.lang.Object getSkipDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceCodeHashInput`<sup>Optional</sup> <a name="sourceCodeHashInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput"></a>

```java
public java.lang.String getSourceCodeHashInput();
```

- *Type:* java.lang.String

---

##### `compatibleArchitectures`<sup>Required</sup> <a name="compatibleArchitectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures"></a>

```java
public java.util.List<java.lang.String> getCompatibleArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compatibleRuntimes`<sup>Required</sup> <a name="compatibleRuntimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes"></a>

```java
public java.util.List<java.lang.String> getCompatibleRuntimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerName"></a>

```java
public java.lang.String getLayerName();
```

- *Type:* java.lang.String

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo"></a>

```java
public java.lang.String getLicenseInfo();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `skipDestroy`<sup>Required</sup> <a name="skipDestroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy"></a>

```java
public java.lang.Object getSkipDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceCodeHash`<sup>Required</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash"></a>

```java
public java.lang.String getSourceCodeHash();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionConfig <a name="LambdaLayerVersionConfig" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_layer_version.LambdaLayerVersionConfig;

LambdaLayerVersionConfig.builder()
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
    .layerName(java.lang.String)
//  .compatibleArchitectures(java.util.List<java.lang.String>)
//  .compatibleRuntimes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .filename(java.lang.String)
//  .id(java.lang.String)
//  .licenseInfo(java.lang.String)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
//  .s3ObjectVersion(java.lang.String)
//  .skipDestroy(java.lang.Boolean)
//  .skipDestroy(IResolvable)
//  .sourceCodeHash(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName">layerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo">licenseInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy">skipDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash">sourceCodeHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName"></a>

```java
public java.lang.String getLayerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}.

---

##### `compatibleArchitectures`<sup>Optional</sup> <a name="compatibleArchitectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures"></a>

```java
public java.util.List<java.lang.String> getCompatibleArchitectures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes"></a>

```java
public java.util.List<java.lang.String> getCompatibleRuntimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo"></a>

```java
public java.lang.String getLicenseInfo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}.

---

##### `skipDestroy`<sup>Optional</sup> <a name="skipDestroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy"></a>

```java
public java.lang.Object getSkipDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}.

---

##### `sourceCodeHash`<sup>Optional</sup> <a name="sourceCodeHash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash"></a>

```java
public java.lang.String getSourceCodeHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}.

---



