# `pinpointApp` Submodule <a name="`pinpointApp` Submodule" id="@cdktf/provider-aws.pinpointApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApp <a name="PinpointApp" id="@cdktf/provider-aws.pinpointApp.PinpointApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app aws_pinpoint_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointApp(Construct Scope, string Id, PinpointAppConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig">PinpointAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.pinpointApp.PinpointApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig">PinpointAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook">PutCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime">PutQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook">ResetCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime">ResetQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointApp.PinpointApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCampaignHook` <a name="PutCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook"></a>

```csharp
private void PutCampaignHook(PinpointAppCampaignHook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putCampaignHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits"></a>

```csharp
private void PutLimits(PinpointAppLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `PutQuietTime` <a name="PutQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime"></a>

```csharp
private void PutQuietTime(PinpointAppQuietTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.pinpointApp.PinpointApp.putQuietTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `ResetCampaignHook` <a name="ResetCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetCampaignHook"></a>

```csharp
private void ResetCampaignHook()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetQuietTime` <a name="ResetQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetQuietTime"></a>

```csharp
private void ResetQuietTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointApp.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApp.PinpointApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook">CampaignHook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime">QuietTime</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput">CampaignHookInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput">LimitsInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput">QuietTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CampaignHook`<sup>Required</sup> <a name="CampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHook"></a>

```csharp
public PinpointAppCampaignHookOutputReference CampaignHook { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limits"></a>

```csharp
public PinpointAppLimitsOutputReference Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a>

---

##### `QuietTime`<sup>Required</sup> <a name="QuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTime"></a>

```csharp
public PinpointAppQuietTimeOutputReference QuietTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a>

---

##### `CampaignHookInput`<sup>Optional</sup> <a name="CampaignHookInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.campaignHookInput"></a>

```csharp
public PinpointAppCampaignHook CampaignHookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.limitsInput"></a>

```csharp
public PinpointAppLimits LimitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `QuietTimeInput`<sup>Optional</sup> <a name="QuietTimeInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.quietTimeInput"></a>

```csharp
public PinpointAppQuietTime QuietTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointApp.PinpointApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointAppCampaignHook <a name="PinpointAppCampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointAppCampaignHook {
    string LambdaFunctionName = null,
    string Mode = null,
    string WebUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName">LambdaFunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl">WebUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}. |

---

##### `LambdaFunctionName`<sup>Optional</sup> <a name="LambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName"></a>

```csharp
public string LambdaFunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#mode PinpointApp#mode}.

---

##### `WebUrl`<sup>Optional</sup> <a name="WebUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook.property.webUrl"></a>

```csharp
public string WebUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#web_url PinpointApp#web_url}.

---

### PinpointAppConfig <a name="PinpointAppConfig" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointAppConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    PinpointAppCampaignHook CampaignHook = null,
    string Id = null,
    PinpointAppLimits Limits = null,
    string Name = null,
    string NamePrefix = null,
    PinpointAppQuietTime QuietTime = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook">CampaignHook</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | campaign_hook block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime">QuietTime</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | quiet_time block. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CampaignHook`<sup>Optional</sup> <a name="CampaignHook" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.campaignHook"></a>

```csharp
public PinpointAppCampaignHook CampaignHook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

campaign_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#campaign_hook PinpointApp#campaign_hook}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#id PinpointApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.limits"></a>

```csharp
public PinpointAppLimits Limits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#limits PinpointApp#limits}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name PinpointApp#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#name_prefix PinpointApp#name_prefix}.

---

##### `QuietTime`<sup>Optional</sup> <a name="QuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.quietTime"></a>

```csharp
public PinpointAppQuietTime QuietTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

quiet_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#quiet_time PinpointApp#quiet_time}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags PinpointApp#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.pinpointApp.PinpointAppConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#tags_all PinpointApp#tags_all}.

---

### PinpointAppLimits <a name="PinpointAppLimits" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointAppLimits {
    double Daily = null,
    double MaximumDuration = null,
    double MessagesPerSecond = null,
    double Total = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily">Daily</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration">MaximumDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond">MessagesPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total">Total</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}. |

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.daily"></a>

```csharp
public double Daily { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#daily PinpointApp#daily}.

---

##### `MaximumDuration`<sup>Optional</sup> <a name="MaximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.maximumDuration"></a>

```csharp
public double MaximumDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#maximum_duration PinpointApp#maximum_duration}.

---

##### `MessagesPerSecond`<sup>Optional</sup> <a name="MessagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.messagesPerSecond"></a>

```csharp
public double MessagesPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#messages_per_second PinpointApp#messages_per_second}.

---

##### `Total`<sup>Optional</sup> <a name="Total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimits.property.total"></a>

```csharp
public double Total { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#total PinpointApp#total}.

---

### PinpointAppQuietTime <a name="PinpointAppQuietTime" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointAppQuietTime {
    string End = null,
    string Start = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#end PinpointApp#end}.

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app#start PinpointApp#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointAppCampaignHookOutputReference <a name="PinpointAppCampaignHookOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointAppCampaignHookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName">ResetLambdaFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl">ResetWebUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaFunctionName` <a name="ResetLambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName"></a>

```csharp
private void ResetLambdaFunctionName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetWebUrl` <a name="ResetWebUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl"></a>

```csharp
private void ResetWebUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput">LambdaFunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput">WebUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName">LambdaFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaFunctionNameInput`<sup>Optional</sup> <a name="LambdaFunctionNameInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput"></a>

```csharp
public string LambdaFunctionNameInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `WebUrlInput`<sup>Optional</sup> <a name="WebUrlInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput"></a>

```csharp
public string WebUrlInput { get; }
```

- *Type:* string

---

##### `LambdaFunctionName`<sup>Required</sup> <a name="LambdaFunctionName" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName"></a>

```csharp
public string LambdaFunctionName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue"></a>

```csharp
public PinpointAppCampaignHook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---


### PinpointAppLimitsOutputReference <a name="PinpointAppLimitsOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointAppLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration">ResetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond">ResetMessagesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal">ResetTotal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetMaximumDuration` <a name="ResetMaximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration"></a>

```csharp
private void ResetMaximumDuration()
```

##### `ResetMessagesPerSecond` <a name="ResetMessagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond"></a>

```csharp
private void ResetMessagesPerSecond()
```

##### `ResetTotal` <a name="ResetTotal" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.resetTotal"></a>

```csharp
private void ResetTotal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput">DailyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput">MaximumDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput">MessagesPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput">TotalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily">Daily</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration">MaximumDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond">MessagesPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total">Total</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput"></a>

```csharp
public double DailyInput { get; }
```

- *Type:* double

---

##### `MaximumDurationInput`<sup>Optional</sup> <a name="MaximumDurationInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput"></a>

```csharp
public double MaximumDurationInput { get; }
```

- *Type:* double

---

##### `MessagesPerSecondInput`<sup>Optional</sup> <a name="MessagesPerSecondInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput"></a>

```csharp
public double MessagesPerSecondInput { get; }
```

- *Type:* double

---

##### `TotalInput`<sup>Optional</sup> <a name="TotalInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput"></a>

```csharp
public double TotalInput { get; }
```

- *Type:* double

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.daily"></a>

```csharp
public double Daily { get; }
```

- *Type:* double

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration"></a>

```csharp
public double MaximumDuration { get; }
```

- *Type:* double

---

##### `MessagesPerSecond`<sup>Required</sup> <a name="MessagesPerSecond" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond"></a>

```csharp
public double MessagesPerSecond { get; }
```

- *Type:* double

---

##### `Total`<sup>Required</sup> <a name="Total" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.total"></a>

```csharp
public double Total { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue"></a>

```csharp
public PinpointAppLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---


### PinpointAppQuietTimeOutputReference <a name="PinpointAppQuietTimeOutputReference" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointAppQuietTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart"></a>

```csharp
private void ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue"></a>

```csharp
public PinpointAppQuietTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---



