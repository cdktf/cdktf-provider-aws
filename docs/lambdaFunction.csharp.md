# `lambdaFunction` Submodule <a name="`lambdaFunction` Submodule" id="@cdktf/provider-aws.lambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunction <a name="LambdaFunction" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function aws_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunction(Construct Scope, string Id, LambdaFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig">PutDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage">PutEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig">PutFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart">PutSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig">PutTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn">ResetCodeSigningConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig">ResetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig">ResetFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler">ResetHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers">ResetLayers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize">ResetMemorySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType">ResetPackageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish">ResetPublish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds">ResetReplacementSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy">ResetReplaceSecurityGroupsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions">ResetReservedConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key">ResetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion">ResetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart">ResetSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash">ResetSourceCodeHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig">ResetTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDeadLetterConfig` <a name="PutDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig"></a>

```csharp
private void PutDeadLetterConfig(LambdaFunctionDeadLetterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment"></a>

```csharp
private void PutEnvironment(LambdaFunctionEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `PutEphemeralStorage` <a name="PutEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage"></a>

```csharp
private void PutEphemeralStorage(LambdaFunctionEphemeralStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `PutFileSystemConfig` <a name="PutFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig"></a>

```csharp
private void PutFileSystemConfig(LambdaFunctionFileSystemConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig"></a>

```csharp
private void PutImageConfig(LambdaFunctionImageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `PutSnapStart` <a name="PutSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart"></a>

```csharp
private void PutSnapStart(LambdaFunctionSnapStart Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putSnapStart.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts"></a>

```csharp
private void PutTimeouts(LambdaFunctionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

---

##### `PutTracingConfig` <a name="PutTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig"></a>

```csharp
private void PutTracingConfig(LambdaFunctionTracingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putTracingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig"></a>

```csharp
private void PutVpcConfig(LambdaFunctionVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetArchitectures"></a>

```csharp
private void ResetArchitectures()
```

##### `ResetCodeSigningConfigArn` <a name="ResetCodeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn"></a>

```csharp
private void ResetCodeSigningConfigArn()
```

##### `ResetDeadLetterConfig` <a name="ResetDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDeadLetterConfig"></a>

```csharp
private void ResetDeadLetterConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFilename"></a>

```csharp
private void ResetFilename()
```

##### `ResetFileSystemConfig` <a name="ResetFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetFileSystemConfig"></a>

```csharp
private void ResetFileSystemConfig()
```

##### `ResetHandler` <a name="ResetHandler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetHandler"></a>

```csharp
private void ResetHandler()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageConfig"></a>

```csharp
private void ResetImageConfig()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetLayers` <a name="ResetLayers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetLayers"></a>

```csharp
private void ResetLayers()
```

##### `ResetMemorySize` <a name="ResetMemorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetMemorySize"></a>

```csharp
private void ResetMemorySize()
```

##### `ResetPackageType` <a name="ResetPackageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPackageType"></a>

```csharp
private void ResetPackageType()
```

##### `ResetPublish` <a name="ResetPublish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetPublish"></a>

```csharp
private void ResetPublish()
```

##### `ResetReplacementSecurityGroupIds` <a name="ResetReplacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplacementSecurityGroupIds"></a>

```csharp
private void ResetReplacementSecurityGroupIds()
```

##### `ResetReplaceSecurityGroupsOnDestroy` <a name="ResetReplaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReplaceSecurityGroupsOnDestroy"></a>

```csharp
private void ResetReplaceSecurityGroupsOnDestroy()
```

##### `ResetReservedConcurrentExecutions` <a name="ResetReservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions"></a>

```csharp
private void ResetReservedConcurrentExecutions()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3Key"></a>

```csharp
private void ResetS3Key()
```

##### `ResetS3ObjectVersion` <a name="ResetS3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetS3ObjectVersion"></a>

```csharp
private void ResetS3ObjectVersion()
```

##### `ResetSnapStart` <a name="ResetSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSnapStart"></a>

```csharp
private void ResetSnapStart()
```

##### `ResetSourceCodeHash` <a name="ResetSourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetSourceCodeHash"></a>

```csharp
private void ResetSourceCodeHash()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTracingConfig` <a name="ResetTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetTracingConfig"></a>

```csharp
private void ResetTracingConfig()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig">FileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn">InvokeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn">QualifiedArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn">QualifiedInvokeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn">SigningJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn">SigningProfileVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart">SnapStart</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize">SourceCodeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig">TracingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput">ArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput">CodeSigningConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput">DeadLetterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput">FileSystemConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput">HandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput">ImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput">LayersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput">MemorySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput">PackageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput">PublishInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput">ReplacementSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput">ReplaceSecurityGroupsOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput">ReservedConcurrentExecutionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput">S3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput">SnapStartInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput">SourceCodeHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput">TracingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn">CodeSigningConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler">Handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers">Layers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize">MemorySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish">Publish</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds">ReplacementSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy">ReplaceSecurityGroupsOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions">ReservedConcurrentExecutions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash">SourceCodeHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeadLetterConfig`<sup>Required</sup> <a name="DeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfig"></a>

```csharp
public LambdaFunctionDeadLetterConfigOutputReference DeadLetterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environment"></a>

```csharp
public LambdaFunctionEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorage"></a>

```csharp
public LambdaFunctionEphemeralStorageOutputReference EphemeralStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a>

---

##### `FileSystemConfig`<sup>Required</sup> <a name="FileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfig"></a>

```csharp
public LambdaFunctionFileSystemConfigOutputReference FileSystemConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference">LambdaFunctionFileSystemConfigOutputReference</a>

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfig"></a>

```csharp
public LambdaFunctionImageConfigOutputReference ImageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a>

---

##### `InvokeArn`<sup>Required</sup> <a name="InvokeArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.invokeArn"></a>

```csharp
public string InvokeArn { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `QualifiedArn`<sup>Required</sup> <a name="QualifiedArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedArn"></a>

```csharp
public string QualifiedArn { get; }
```

- *Type:* string

---

##### `QualifiedInvokeArn`<sup>Required</sup> <a name="QualifiedInvokeArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.qualifiedInvokeArn"></a>

```csharp
public string QualifiedInvokeArn { get; }
```

- *Type:* string

---

##### `SigningJobArn`<sup>Required</sup> <a name="SigningJobArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingJobArn"></a>

```csharp
public string SigningJobArn { get; }
```

- *Type:* string

---

##### `SigningProfileVersionArn`<sup>Required</sup> <a name="SigningProfileVersionArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.signingProfileVersionArn"></a>

```csharp
public string SigningProfileVersionArn { get; }
```

- *Type:* string

---

##### `SnapStart`<sup>Required</sup> <a name="SnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStart"></a>

```csharp
public LambdaFunctionSnapStartOutputReference SnapStart { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a>

---

##### `SourceCodeSize`<sup>Required</sup> <a name="SourceCodeSize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeSize"></a>

```csharp
public double SourceCodeSize { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeouts"></a>

```csharp
public LambdaFunctionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference">LambdaFunctionTimeoutsOutputReference</a>

---

##### `TracingConfig`<sup>Required</sup> <a name="TracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfig"></a>

```csharp
public LambdaFunctionTracingConfigOutputReference TracingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfig"></a>

```csharp
public LambdaFunctionVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a>

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architecturesInput"></a>

```csharp
public string[] ArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `CodeSigningConfigArnInput`<sup>Optional</sup> <a name="CodeSigningConfigArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput"></a>

```csharp
public string CodeSigningConfigArnInput { get; }
```

- *Type:* string

---

##### `DeadLetterConfigInput`<sup>Optional</sup> <a name="DeadLetterConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.deadLetterConfigInput"></a>

```csharp
public LambdaFunctionDeadLetterConfig DeadLetterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.environmentInput"></a>

```csharp
public LambdaFunctionEnvironment EnvironmentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.ephemeralStorageInput"></a>

```csharp
public LambdaFunctionEphemeralStorage EphemeralStorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `FileSystemConfigInput`<sup>Optional</sup> <a name="FileSystemConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.fileSystemConfigInput"></a>

```csharp
public LambdaFunctionFileSystemConfig FileSystemConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handlerInput"></a>

```csharp
public string HandlerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageConfigInput"></a>

```csharp
public LambdaFunctionImageConfig ImageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `LayersInput`<sup>Optional</sup> <a name="LayersInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layersInput"></a>

```csharp
public string[] LayersInput { get; }
```

- *Type:* string[]

---

##### `MemorySizeInput`<sup>Optional</sup> <a name="MemorySizeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySizeInput"></a>

```csharp
public double MemorySizeInput { get; }
```

- *Type:* double

---

##### `PackageTypeInput`<sup>Optional</sup> <a name="PackageTypeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageTypeInput"></a>

```csharp
public string PackageTypeInput { get; }
```

- *Type:* string

---

##### `PublishInput`<sup>Optional</sup> <a name="PublishInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publishInput"></a>

```csharp
public object PublishInput { get; }
```

- *Type:* object

---

##### `ReplacementSecurityGroupIdsInput`<sup>Optional</sup> <a name="ReplacementSecurityGroupIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIdsInput"></a>

```csharp
public string[] ReplacementSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `ReplaceSecurityGroupsOnDestroyInput`<sup>Optional</sup> <a name="ReplaceSecurityGroupsOnDestroyInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroyInput"></a>

```csharp
public object ReplaceSecurityGroupsOnDestroyInput { get; }
```

- *Type:* object

---

##### `ReservedConcurrentExecutionsInput`<sup>Optional</sup> <a name="ReservedConcurrentExecutionsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput"></a>

```csharp
public double ReservedConcurrentExecutionsInput { get; }
```

- *Type:* double

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3ObjectVersionInput`<sup>Optional</sup> <a name="S3ObjectVersionInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersionInput"></a>

```csharp
public string S3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `SnapStartInput`<sup>Optional</sup> <a name="SnapStartInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.snapStartInput"></a>

```csharp
public LambdaFunctionSnapStart SnapStartInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `SourceCodeHashInput`<sup>Optional</sup> <a name="SourceCodeHashInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHashInput"></a>

```csharp
public string SourceCodeHashInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TracingConfigInput`<sup>Optional</sup> <a name="TracingConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tracingConfigInput"></a>

```csharp
public LambdaFunctionTracingConfig TracingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.vpcConfigInput"></a>

```csharp
public LambdaFunctionVpcConfig VpcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `CodeSigningConfigArn`<sup>Required</sup> <a name="CodeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.codeSigningConfigArn"></a>

```csharp
public string CodeSigningConfigArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.handler"></a>

```csharp
public string Handler { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Layers`<sup>Required</sup> <a name="Layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.layers"></a>

```csharp
public string[] Layers { get; }
```

- *Type:* string[]

---

##### `MemorySize`<sup>Required</sup> <a name="MemorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.memorySize"></a>

```csharp
public double MemorySize { get; }
```

- *Type:* double

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.publish"></a>

```csharp
public object Publish { get; }
```

- *Type:* object

---

##### `ReplacementSecurityGroupIds`<sup>Required</sup> <a name="ReplacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replacementSecurityGroupIds"></a>

```csharp
public string[] ReplacementSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `ReplaceSecurityGroupsOnDestroy`<sup>Required</sup> <a name="ReplaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.replaceSecurityGroupsOnDestroy"></a>

```csharp
public object ReplaceSecurityGroupsOnDestroy { get; }
```

- *Type:* object

---

##### `ReservedConcurrentExecutions`<sup>Required</sup> <a name="ReservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions"></a>

```csharp
public double ReservedConcurrentExecutions { get; }
```

- *Type:* double

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; }
```

- *Type:* string

---

##### `SourceCodeHash`<sup>Required</sup> <a name="SourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.sourceCodeHash"></a>

```csharp
public string SourceCodeHash { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionConfig <a name="LambdaFunctionConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FunctionName,
    string Role,
    string[] Architectures = null,
    string CodeSigningConfigArn = null,
    LambdaFunctionDeadLetterConfig DeadLetterConfig = null,
    string Description = null,
    LambdaFunctionEnvironment Environment = null,
    LambdaFunctionEphemeralStorage EphemeralStorage = null,
    string Filename = null,
    LambdaFunctionFileSystemConfig FileSystemConfig = null,
    string Handler = null,
    string Id = null,
    LambdaFunctionImageConfig ImageConfig = null,
    string ImageUri = null,
    string KmsKeyArn = null,
    string[] Layers = null,
    double MemorySize = null,
    string PackageType = null,
    object Publish = null,
    string[] ReplacementSecurityGroupIds = null,
    object ReplaceSecurityGroupsOnDestroy = null,
    double ReservedConcurrentExecutions = null,
    string Runtime = null,
    string S3Bucket = null,
    string S3Key = null,
    string S3ObjectVersion = null,
    LambdaFunctionSnapStart SnapStart = null,
    string SourceCodeHash = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double Timeout = null,
    LambdaFunctionTimeouts Timeouts = null,
    LambdaFunctionTracingConfig TracingConfig = null,
    LambdaFunctionVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures">Architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn">CodeSigningConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig">FileSystemConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | file_system_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler">Handler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri">ImageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers">Layers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize">MemorySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType">PackageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish">Publish</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds">ReplacementSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy">ReplaceSecurityGroupsOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions">ReservedConcurrentExecutions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart">SnapStart</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | snap_start block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash">SourceCodeHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig">TracingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | tracing_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#function_name LambdaFunction#function_name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#role LambdaFunction#role}.

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.architectures"></a>

```csharp
public string[] Architectures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#architectures LambdaFunction#architectures}.

---

##### `CodeSigningConfigArn`<sup>Optional</sup> <a name="CodeSigningConfigArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn"></a>

```csharp
public string CodeSigningConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}.

---

##### `DeadLetterConfig`<sup>Optional</sup> <a name="DeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig"></a>

```csharp
public LambdaFunctionDeadLetterConfig DeadLetterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#description LambdaFunction#description}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.environment"></a>

```csharp
public LambdaFunctionEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#environment LambdaFunction#environment}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage"></a>

```csharp
public LambdaFunctionEphemeralStorage EphemeralStorage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#filename LambdaFunction#filename}.

---

##### `FileSystemConfig`<sup>Optional</sup> <a name="FileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfig"></a>

```csharp
public LambdaFunctionFileSystemConfig FileSystemConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

file_system_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#file_system_config LambdaFunction#file_system_config}

---

##### `Handler`<sup>Optional</sup> <a name="Handler" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.handler"></a>

```csharp
public string Handler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#handler LambdaFunction#handler}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#id LambdaFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageConfig"></a>

```csharp
public LambdaFunctionImageConfig ImageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_config LambdaFunction#image_config}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#image_uri LambdaFunction#image_uri}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}.

---

##### `Layers`<sup>Optional</sup> <a name="Layers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.layers"></a>

```csharp
public string[] Layers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#layers LambdaFunction#layers}.

---

##### `MemorySize`<sup>Optional</sup> <a name="MemorySize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.memorySize"></a>

```csharp
public double MemorySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#memory_size LambdaFunction#memory_size}.

---

##### `PackageType`<sup>Optional</sup> <a name="PackageType" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.packageType"></a>

```csharp
public string PackageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#package_type LambdaFunction#package_type}.

---

##### `Publish`<sup>Optional</sup> <a name="Publish" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.publish"></a>

```csharp
public object Publish { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#publish LambdaFunction#publish}.

---

##### `ReplacementSecurityGroupIds`<sup>Optional</sup> <a name="ReplacementSecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replacementSecurityGroupIds"></a>

```csharp
public string[] ReplacementSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}.

---

##### `ReplaceSecurityGroupsOnDestroy`<sup>Optional</sup> <a name="ReplaceSecurityGroupsOnDestroy" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.replaceSecurityGroupsOnDestroy"></a>

```csharp
public object ReplaceSecurityGroupsOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}.

---

##### `ReservedConcurrentExecutions`<sup>Optional</sup> <a name="ReservedConcurrentExecutions" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions"></a>

```csharp
public double ReservedConcurrentExecutions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#runtime LambdaFunction#runtime}.

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_bucket LambdaFunction#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_key LambdaFunction#s3_key}.

---

##### `S3ObjectVersion`<sup>Optional</sup> <a name="S3ObjectVersion" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#s3_object_version LambdaFunction#s3_object_version}.

---

##### `SnapStart`<sup>Optional</sup> <a name="SnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.snapStart"></a>

```csharp
public LambdaFunctionSnapStart SnapStart { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

snap_start block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `SourceCodeHash`<sup>Optional</sup> <a name="SourceCodeHash" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.sourceCodeHash"></a>

```csharp
public string SourceCodeHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#source_code_hash LambdaFunction#source_code_hash}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags LambdaFunction#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tags_all LambdaFunction#tags_all}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeout LambdaFunction#timeout}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.timeouts"></a>

```csharp
public LambdaFunctionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts">LambdaFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#timeouts LambdaFunction#timeouts}

---

##### `TracingConfig`<sup>Optional</sup> <a name="TracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.tracingConfig"></a>

```csharp
public LambdaFunctionTracingConfig TracingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

tracing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionConfig.property.vpcConfig"></a>

```csharp
public LambdaFunctionVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#vpc_config LambdaFunction#vpc_config}

---

### LambdaFunctionDeadLetterConfig <a name="LambdaFunctionDeadLetterConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionDeadLetterConfig {
    string TargetArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn">TargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}. |

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#target_arn LambdaFunction#target_arn}.

---

### LambdaFunctionEnvironment <a name="LambdaFunctionEnvironment" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionEnvironment {
    System.Collections.Generic.IDictionary<string, string> Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}. |

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#variables LambdaFunction#variables}.

---

### LambdaFunctionEphemeralStorage <a name="LambdaFunctionEphemeralStorage" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionEphemeralStorage {
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}. |

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#size LambdaFunction#size}.

---

### LambdaFunctionFileSystemConfig <a name="LambdaFunctionFileSystemConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionFileSystemConfig {
    string Arn,
    string LocalMountPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath">LocalMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#arn LambdaFunction#arn}.

---

##### `LocalMountPath`<sup>Required</sup> <a name="LocalMountPath" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig.property.localMountPath"></a>

```csharp
public string LocalMountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#local_mount_path LambdaFunction#local_mount_path}.

---

### LambdaFunctionImageConfig <a name="LambdaFunctionImageConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionImageConfig {
    string[] Command = null,
    string[] EntryPoint = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#command LambdaFunction#command}.

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#entry_point LambdaFunction#entry_point}.

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#working_directory LambdaFunction#working_directory}.

---

### LambdaFunctionSnapStart <a name="LambdaFunctionSnapStart" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionSnapStart {
    string ApplyOn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn">ApplyOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}. |

---

##### `ApplyOn`<sup>Required</sup> <a name="ApplyOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart.property.applyOn"></a>

```csharp
public string ApplyOn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#apply_on LambdaFunction#apply_on}.

---

### LambdaFunctionTimeouts <a name="LambdaFunctionTimeouts" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#create LambdaFunction#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#update LambdaFunction#update}.

---

### LambdaFunctionTracingConfig <a name="LambdaFunctionTracingConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionTracingConfig {
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#mode LambdaFunction#mode}.

---

### LambdaFunctionVpcConfig <a name="LambdaFunctionVpcConfig" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionVpcConfig {
    string[] SecurityGroupIds,
    string[] SubnetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#security_group_ids LambdaFunction#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function#subnet_ids LambdaFunction#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionDeadLetterConfigOutputReference <a name="LambdaFunctionDeadLetterConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionDeadLetterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionDeadLetterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---


### LambdaFunctionEnvironmentOutputReference <a name="LambdaFunctionEnvironmentOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables"></a>

```csharp
private void ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput">VariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---


### LambdaFunctionEphemeralStorageOutputReference <a name="LambdaFunctionEphemeralStorageOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionEphemeralStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionEphemeralStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---


### LambdaFunctionFileSystemConfigOutputReference <a name="LambdaFunctionFileSystemConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionFileSystemConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput">LocalMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath">LocalMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `LocalMountPathInput`<sup>Optional</sup> <a name="LocalMountPathInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPathInput"></a>

```csharp
public string LocalMountPathInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LocalMountPath`<sup>Required</sup> <a name="LocalMountPath" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.localMountPath"></a>

```csharp
public string LocalMountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfigOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionFileSystemConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionFileSystemConfig">LambdaFunctionFileSystemConfig</a>

---


### LambdaFunctionImageConfigOutputReference <a name="LambdaFunctionImageConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionImageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint"></a>

```csharp
private void ResetEntryPoint()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput"></a>

```csharp
public string[] EntryPointInput { get; }
```

- *Type:* string[]

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; }
```

- *Type:* string[]

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionImageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---


### LambdaFunctionSnapStartOutputReference <a name="LambdaFunctionSnapStartOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionSnapStartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus">OptimizationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput">ApplyOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn">ApplyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptimizationStatus`<sup>Required</sup> <a name="OptimizationStatus" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.optimizationStatus"></a>

```csharp
public string OptimizationStatus { get; }
```

- *Type:* string

---

##### `ApplyOnInput`<sup>Optional</sup> <a name="ApplyOnInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput"></a>

```csharp
public string ApplyOnInput { get; }
```

- *Type:* string

---

##### `ApplyOn`<sup>Required</sup> <a name="ApplyOn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```csharp
public string ApplyOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionSnapStart InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---


### LambdaFunctionTimeoutsOutputReference <a name="LambdaFunctionTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LambdaFunctionTracingConfigOutputReference <a name="LambdaFunctionTracingConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionTracingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionTracingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---


### LambdaFunctionVpcConfigOutputReference <a name="LambdaFunctionVpcConfigOutputReference" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaFunctionVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```csharp
public LambdaFunctionVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---



