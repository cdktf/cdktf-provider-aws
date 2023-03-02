# `glueDevEndpoint` Submodule <a name="`glueDevEndpoint` Submodule" id="@cdktf/provider-aws.glueDevEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDevEndpoint <a name="GlueDevEndpoint" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint aws_glue_dev_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueDevEndpoint(Construct Scope, string Id, GlueDevEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig">GlueDevEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig">GlueDevEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path">ResetExtraJarsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path">ResetExtraPythonLibsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys">ResetPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetExtraJarsS3Path` <a name="ResetExtraJarsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path"></a>

```csharp
private void ResetExtraJarsS3Path()
```

##### `ResetExtraPythonLibsS3Path` <a name="ResetExtraPythonLibsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path"></a>

```csharp
private void ResetExtraPythonLibsS3Path()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion"></a>

```csharp
private void ResetGlueVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes"></a>

```csharp
private void ResetNumberOfNodes()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers"></a>

```csharp
private void ResetNumberOfWorkers()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetPublicKeys` <a name="ResetPublicKeys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys"></a>

```csharp
private void ResetPublicKeys()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration"></a>

```csharp
private void ResetSecurityConfiguration()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetWorkerType"></a>

```csharp
private void ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueDevEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueDevEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueDevEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.privateAddress">PrivateAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicAddress">PublicAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress">YarnEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort">ZeppelinRemoteSparkInterpreterPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput">ArgumentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput">ExtraJarsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput">ExtraPythonLibsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput">GlueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput">PublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput">WorkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arguments">Arguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path">ExtraJarsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path">ExtraPythonLibsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersion">GlueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeys">PublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `PrivateAddress`<sup>Required</sup> <a name="PrivateAddress" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.privateAddress"></a>

```csharp
public string PrivateAddress { get; }
```

- *Type:* string

---

##### `PublicAddress`<sup>Required</sup> <a name="PublicAddress" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicAddress"></a>

```csharp
public string PublicAddress { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `YarnEndpointAddress`<sup>Required</sup> <a name="YarnEndpointAddress" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress"></a>

```csharp
public string YarnEndpointAddress { get; }
```

- *Type:* string

---

##### `ZeppelinRemoteSparkInterpreterPort`<sup>Required</sup> <a name="ZeppelinRemoteSparkInterpreterPort" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort"></a>

```csharp
public double ZeppelinRemoteSparkInterpreterPort { get; }
```

- *Type:* double

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ArgumentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraJarsS3PathInput`<sup>Optional</sup> <a name="ExtraJarsS3PathInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput"></a>

```csharp
public string ExtraJarsS3PathInput { get; }
```

- *Type:* string

---

##### `ExtraPythonLibsS3PathInput`<sup>Optional</sup> <a name="ExtraPythonLibsS3PathInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput"></a>

```csharp
public string ExtraPythonLibsS3PathInput { get; }
```

- *Type:* string

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput"></a>

```csharp
public string GlueVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput"></a>

```csharp
public double NumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `PublicKeysInput`<sup>Optional</sup> <a name="PublicKeysInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput"></a>

```csharp
public string[] PublicKeysInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput"></a>

```csharp
public string SecurityConfigurationInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput"></a>

```csharp
public string WorkerTypeInput { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Arguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraJarsS3Path`<sup>Required</sup> <a name="ExtraJarsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path"></a>

```csharp
public string ExtraJarsS3Path { get; }
```

- *Type:* string

---

##### `ExtraPythonLibsS3Path`<sup>Required</sup> <a name="ExtraPythonLibsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path"></a>

```csharp
public string ExtraPythonLibsS3Path { get; }
```

- *Type:* string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersion"></a>

```csharp
public string GlueVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; }
```

- *Type:* double

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `PublicKeys`<sup>Required</sup> <a name="PublicKeys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeys"></a>

```csharp
public string[] PublicKeys { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDevEndpointConfig <a name="GlueDevEndpointConfig" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueDevEndpointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RoleArn,
    System.Collections.Generic.IDictionary<string, string> Arguments = null,
    string ExtraJarsS3Path = null,
    string ExtraPythonLibsS3Path = null,
    string GlueVersion = null,
    string Id = null,
    double NumberOfNodes = null,
    double NumberOfWorkers = null,
    string PublicKey = null,
    string[] PublicKeys = null,
    string SecurityConfiguration = null,
    string[] SecurityGroupIds = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string WorkerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.arguments">Arguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path">ExtraJarsS3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path">ExtraPythonLibsS3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion">GlueVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys">PublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.workerType">WorkerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.arguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Arguments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}.

---

##### `ExtraJarsS3Path`<sup>Optional</sup> <a name="ExtraJarsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path"></a>

```csharp
public string ExtraJarsS3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}.

---

##### `ExtraPythonLibsS3Path`<sup>Optional</sup> <a name="ExtraPythonLibsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path"></a>

```csharp
public string ExtraPythonLibsS3Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}.

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion"></a>

```csharp
public string GlueVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}.

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}.

---

##### `PublicKeys`<sup>Optional</sup> <a name="PublicKeys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys"></a>

```csharp
public string[] PublicKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}.

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}.

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.workerType"></a>

```csharp
public string WorkerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}.

---



