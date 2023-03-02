# `appstreamImageBuilder` Submodule <a name="`appstreamImageBuilder` Submodule" id="@cdktf/provider-aws.appstreamImageBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamImageBuilder <a name="AppstreamImageBuilder" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder aws_appstream_image_builder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilder(Construct Scope, string Id, AppstreamImageBuilderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint">PutAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo">PutDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoint">ResetAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion">ResetAppstreamAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo">ResetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess">ResetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn">ResetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccessEndpoint` <a name="PutAccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint"></a>

```csharp
private void PutAccessEndpoint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint.parameter.value"></a>

- *Type:* object

---

##### `PutDomainJoinInfo` <a name="PutDomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo"></a>

```csharp
private void PutDomainJoinInfo(AppstreamImageBuilderDomainJoinInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig"></a>

```csharp
private void PutVpcConfig(AppstreamImageBuilderVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `ResetAccessEndpoint` <a name="ResetAccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoint"></a>

```csharp
private void ResetAccessEndpoint()
```

##### `ResetAppstreamAgentVersion` <a name="ResetAppstreamAgentVersion" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion"></a>

```csharp
private void ResetAppstreamAgentVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomainJoinInfo` <a name="ResetDomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo"></a>

```csharp
private void ResetDomainJoinInfo()
```

##### `ResetEnableDefaultInternetAccess` <a name="ResetEnableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess"></a>

```csharp
private void ResetEnableDefaultInternetAccess()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageArn` <a name="ResetImageArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn"></a>

```csharp
private void ResetImageArn()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageName"></a>

```csharp
private void ResetImageName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppstreamImageBuilder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppstreamImageBuilder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppstreamImageBuilder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoint">AccessEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList">AppstreamImageBuilderAccessEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointInput">AccessEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput">AppstreamAgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput">DomainJoinInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput">EnableDefaultInternetAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput">ImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion">AppstreamAgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn">ImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessEndpoint`<sup>Required</sup> <a name="AccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoint"></a>

```csharp
public AppstreamImageBuilderAccessEndpointList AccessEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList">AppstreamImageBuilderAccessEndpointList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `DomainJoinInfo`<sup>Required</sup> <a name="DomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfoOutputReference DomainJoinInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig"></a>

```csharp
public AppstreamImageBuilderVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a>

---

##### `AccessEndpointInput`<sup>Optional</sup> <a name="AccessEndpointInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointInput"></a>

```csharp
public object AccessEndpointInput { get; }
```

- *Type:* object

---

##### `AppstreamAgentVersionInput`<sup>Optional</sup> <a name="AppstreamAgentVersionInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput"></a>

```csharp
public string AppstreamAgentVersionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainJoinInfoInput`<sup>Optional</sup> <a name="DomainJoinInfoInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfo DomainJoinInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `EnableDefaultInternetAccessInput`<sup>Optional</sup> <a name="EnableDefaultInternetAccessInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput"></a>

```csharp
public object EnableDefaultInternetAccessInput { get; }
```

- *Type:* object

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageArnInput`<sup>Optional</sup> <a name="ImageArnInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput"></a>

```csharp
public string ImageArnInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput"></a>

```csharp
public AppstreamImageBuilderVpcConfig VpcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `AppstreamAgentVersion`<sup>Required</sup> <a name="AppstreamAgentVersion" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion"></a>

```csharp
public string AppstreamAgentVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableDefaultInternetAccess`<sup>Required</sup> <a name="EnableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess"></a>

```csharp
public object EnableDefaultInternetAccess { get; }
```

- *Type:* object

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn"></a>

```csharp
public string ImageArn { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamImageBuilderAccessEndpoint <a name="AppstreamImageBuilderAccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderAccessEndpoint {
    string EndpointType,
    string VpceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.vpceId">VpceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}. |

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}.

---

##### `VpceId`<sup>Optional</sup> <a name="VpceId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.vpceId"></a>

```csharp
public string VpceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}.

---

### AppstreamImageBuilderConfig <a name="AppstreamImageBuilderConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceType,
    string Name,
    object AccessEndpoint = null,
    string AppstreamAgentVersion = null,
    string Description = null,
    string DisplayName = null,
    AppstreamImageBuilderDomainJoinInfo DomainJoinInfo = null,
    object EnableDefaultInternetAccess = null,
    string IamRoleArn = null,
    string Id = null,
    string ImageArn = null,
    string ImageName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    AppstreamImageBuilderVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoint">AccessEndpoint</a></code> | <code>object</code> | access_endpoint block. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion">AppstreamAgentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | domain_join_info block. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#id AppstreamImageBuilder#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn">ImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `AccessEndpoint`<sup>Optional</sup> <a name="AccessEndpoint" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoint"></a>

```csharp
public object AccessEndpoint { get; set; }
```

- *Type:* object

access_endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#access_endpoint AppstreamImageBuilder#access_endpoint}

---

##### `AppstreamAgentVersion`<sup>Optional</sup> <a name="AppstreamAgentVersion" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion"></a>

```csharp
public string AppstreamAgentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `DomainJoinInfo`<sup>Optional</sup> <a name="DomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfo DomainJoinInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

domain_join_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}

---

##### `EnableDefaultInternetAccess`<sup>Optional</sup> <a name="EnableDefaultInternetAccess" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess"></a>

```csharp
public object EnableDefaultInternetAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#id AppstreamImageBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageArn`<sup>Optional</sup> <a name="ImageArn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn"></a>

```csharp
public string ImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig"></a>

```csharp
public AppstreamImageBuilderVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}

---

### AppstreamImageBuilderDomainJoinInfo <a name="AppstreamImageBuilderDomainJoinInfo" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderDomainJoinInfo {
    string DirectoryName = null,
    string OrganizationalUnitDistinguishedName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName">DirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}. |

---

##### `DirectoryName`<sup>Optional</sup> <a name="DirectoryName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName"></a>

```csharp
public string DirectoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}.

---

### AppstreamImageBuilderVpcConfig <a name="AppstreamImageBuilderVpcConfig" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderVpcConfig {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamImageBuilderAccessEndpointList <a name="AppstreamImageBuilderAccessEndpointList" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderAccessEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get"></a>

```csharp
private AppstreamImageBuilderAccessEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppstreamImageBuilderAccessEndpointOutputReference <a name="AppstreamImageBuilderAccessEndpointOutputReference" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderAccessEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resetVpceId">ResetVpceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpceId` <a name="ResetVpceId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resetVpceId"></a>

```csharp
private void ResetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceIdInput">VpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceId">VpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpceIdInput`<sup>Optional</sup> <a name="VpceIdInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceIdInput"></a>

```csharp
public string VpceIdInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `VpceId`<sup>Required</sup> <a name="VpceId" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceId"></a>

```csharp
public string VpceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppstreamImageBuilderDomainJoinInfoOutputReference <a name="AppstreamImageBuilderDomainJoinInfoOutputReference" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderDomainJoinInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName">ResetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectoryName` <a name="ResetDirectoryName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName"></a>

```csharp
private void ResetDirectoryName()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```csharp
private void ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput">DirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```csharp
public string DirectoryNameInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```csharp
public string OrganizationalUnitDistinguishedNameInput { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---


### AppstreamImageBuilderVpcConfigOutputReference <a name="AppstreamImageBuilderVpcConfigOutputReference" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamImageBuilderVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue"></a>

```csharp
public AppstreamImageBuilderVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---



