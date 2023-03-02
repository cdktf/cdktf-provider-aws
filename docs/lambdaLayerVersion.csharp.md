# `lambdaLayerVersion` Submodule <a name="`lambdaLayerVersion` Submodule" id="@cdktf/provider-aws.lambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersion <a name="LambdaLayerVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaLayerVersion(Construct Scope, string Id, LambdaLayerVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig">LambdaLayerVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig">LambdaLayerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures">ResetCompatibleArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes">ResetCompatibleRuntimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo">ResetLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Key">ResetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion">ResetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy">ResetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash">ResetSourceCodeHash</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCompatibleArchitectures` <a name="ResetCompatibleArchitectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures"></a>

```csharp
private void ResetCompatibleArchitectures()
```

##### `ResetCompatibleRuntimes` <a name="ResetCompatibleRuntimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes"></a>

```csharp
private void ResetCompatibleRuntimes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetFilename"></a>

```csharp
private void ResetFilename()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseInfo` <a name="ResetLicenseInfo" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo"></a>

```csharp
private void ResetLicenseInfo()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Key"></a>

```csharp
private void ResetS3Key()
```

##### `ResetS3ObjectVersion` <a name="ResetS3ObjectVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion"></a>

```csharp
private void ResetS3ObjectVersion()
```

##### `ResetSkipDestroy` <a name="ResetSkipDestroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy"></a>

```csharp
private void ResetSkipDestroy()
```

##### `ResetSourceCodeHash` <a name="ResetSourceCodeHash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash"></a>

```csharp
private void ResetSourceCodeHash()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaLayerVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaLayerVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaLayerVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerArn">LayerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn">SigningJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn">SigningProfileVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize">SourceCodeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput">CompatibleArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput">CompatibleRuntimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput">LayerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput">LicenseInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput">S3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput">SkipDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput">SourceCodeHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures">CompatibleArchitectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes">CompatibleRuntimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerName">LayerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo">LicenseInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy">SkipDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash">SourceCodeHash</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `LayerArn`<sup>Required</sup> <a name="LayerArn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerArn"></a>

```csharp
public string LayerArn { get; }
```

- *Type:* string

---

##### `SigningJobArn`<sup>Required</sup> <a name="SigningJobArn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn"></a>

```csharp
public string SigningJobArn { get; }
```

- *Type:* string

---

##### `SigningProfileVersionArn`<sup>Required</sup> <a name="SigningProfileVersionArn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn"></a>

```csharp
public string SigningProfileVersionArn { get; }
```

- *Type:* string

---

##### `SourceCodeSize`<sup>Required</sup> <a name="SourceCodeSize" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize"></a>

```csharp
public double SourceCodeSize { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `CompatibleArchitecturesInput`<sup>Optional</sup> <a name="CompatibleArchitecturesInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput"></a>

```csharp
public string[] CompatibleArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `CompatibleRuntimesInput`<sup>Optional</sup> <a name="CompatibleRuntimesInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput"></a>

```csharp
public string[] CompatibleRuntimesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LayerNameInput`<sup>Optional</sup> <a name="LayerNameInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput"></a>

```csharp
public string LayerNameInput { get; }
```

- *Type:* string

---

##### `LicenseInfoInput`<sup>Optional</sup> <a name="LicenseInfoInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput"></a>

```csharp
public string LicenseInfoInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3ObjectVersionInput`<sup>Optional</sup> <a name="S3ObjectVersionInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput"></a>

```csharp
public string S3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `SkipDestroyInput`<sup>Optional</sup> <a name="SkipDestroyInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput"></a>

```csharp
public object SkipDestroyInput { get; }
```

- *Type:* object

---

##### `SourceCodeHashInput`<sup>Optional</sup> <a name="SourceCodeHashInput" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput"></a>

```csharp
public string SourceCodeHashInput { get; }
```

- *Type:* string

---

##### `CompatibleArchitectures`<sup>Required</sup> <a name="CompatibleArchitectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures"></a>

```csharp
public string[] CompatibleArchitectures { get; }
```

- *Type:* string[]

---

##### `CompatibleRuntimes`<sup>Required</sup> <a name="CompatibleRuntimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes"></a>

```csharp
public string[] CompatibleRuntimes { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LayerName`<sup>Required</sup> <a name="LayerName" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerName"></a>

```csharp
public string LayerName { get; }
```

- *Type:* string

---

##### `LicenseInfo`<sup>Required</sup> <a name="LicenseInfo" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo"></a>

```csharp
public string LicenseInfo { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; }
```

- *Type:* string

---

##### `SkipDestroy`<sup>Required</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy"></a>

```csharp
public object SkipDestroy { get; }
```

- *Type:* object

---

##### `SourceCodeHash`<sup>Required</sup> <a name="SourceCodeHash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash"></a>

```csharp
public string SourceCodeHash { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionConfig <a name="LambdaLayerVersionConfig" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaLayerVersionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LayerName,
    string[] CompatibleArchitectures = null,
    string[] CompatibleRuntimes = null,
    string Description = null,
    string Filename = null,
    string Id = null,
    string LicenseInfo = null,
    string S3Bucket = null,
    string S3Key = null,
    string S3ObjectVersion = null,
    object SkipDestroy = null,
    string SourceCodeHash = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName">LayerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures">CompatibleArchitectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes">CompatibleRuntimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo">LicenseInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy">SkipDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash">SourceCodeHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LayerName`<sup>Required</sup> <a name="LayerName" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName"></a>

```csharp
public string LayerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}.

---

##### `CompatibleArchitectures`<sup>Optional</sup> <a name="CompatibleArchitectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures"></a>

```csharp
public string[] CompatibleArchitectures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}.

---

##### `CompatibleRuntimes`<sup>Optional</sup> <a name="CompatibleRuntimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes"></a>

```csharp
public string[] CompatibleRuntimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}.

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseInfo`<sup>Optional</sup> <a name="LicenseInfo" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo"></a>

```csharp
public string LicenseInfo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}.

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}.

---

##### `S3ObjectVersion`<sup>Optional</sup> <a name="S3ObjectVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}.

---

##### `SkipDestroy`<sup>Optional</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy"></a>

```csharp
public object SkipDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}.

---

##### `SourceCodeHash`<sup>Optional</sup> <a name="SourceCodeHash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash"></a>

```csharp
public string SourceCodeHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}.

---



