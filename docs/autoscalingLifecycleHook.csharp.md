# `autoscalingLifecycleHook` Submodule <a name="`autoscalingLifecycleHook` Submodule" id="@cdktf/provider-aws.autoscalingLifecycleHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLifecycleHook <a name="AutoscalingLifecycleHook" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook aws_autoscaling_lifecycle_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingLifecycleHook(Construct Scope, string Id, AutoscalingLifecycleHookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig">AutoscalingLifecycleHookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig">AutoscalingLifecycleHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult">ResetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout">ResetHeartbeatTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata">ResetNotificationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn">ResetNotificationTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefaultResult` <a name="ResetDefaultResult" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult"></a>

```csharp
private void ResetDefaultResult()
```

##### `ResetHeartbeatTimeout` <a name="ResetHeartbeatTimeout" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout"></a>

```csharp
private void ResetHeartbeatTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationMetadata` <a name="ResetNotificationMetadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata"></a>

```csharp
private void ResetNotificationMetadata()
```

##### `ResetNotificationTargetArn` <a name="ResetNotificationTargetArn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn"></a>

```csharp
private void ResetNotificationTargetArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingLifecycleHook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingLifecycleHook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingLifecycleHook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupNameInput">AutoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput">DefaultResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput">HeartbeatTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput">LifecycleTransitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput">NotificationMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput">NotificationTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult">DefaultResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout">HeartbeatTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition">LifecycleTransition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata">NotificationMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn">NotificationTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscalingGroupNameInput`<sup>Optional</sup> <a name="AutoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupNameInput"></a>

```csharp
public string AutoscalingGroupNameInput { get; }
```

- *Type:* string

---

##### `DefaultResultInput`<sup>Optional</sup> <a name="DefaultResultInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput"></a>

```csharp
public string DefaultResultInput { get; }
```

- *Type:* string

---

##### `HeartbeatTimeoutInput`<sup>Optional</sup> <a name="HeartbeatTimeoutInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput"></a>

```csharp
public double HeartbeatTimeoutInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleTransitionInput`<sup>Optional</sup> <a name="LifecycleTransitionInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput"></a>

```csharp
public string LifecycleTransitionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationMetadataInput`<sup>Optional</sup> <a name="NotificationMetadataInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput"></a>

```csharp
public string NotificationMetadataInput { get; }
```

- *Type:* string

---

##### `NotificationTargetArnInput`<sup>Optional</sup> <a name="NotificationTargetArnInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput"></a>

```csharp
public string NotificationTargetArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupName"></a>

```csharp
public string AutoscalingGroupName { get; }
```

- *Type:* string

---

##### `DefaultResult`<sup>Required</sup> <a name="DefaultResult" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult"></a>

```csharp
public string DefaultResult { get; }
```

- *Type:* string

---

##### `HeartbeatTimeout`<sup>Required</sup> <a name="HeartbeatTimeout" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout"></a>

```csharp
public double HeartbeatTimeout { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleTransition`<sup>Required</sup> <a name="LifecycleTransition" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition"></a>

```csharp
public string LifecycleTransition { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationMetadata`<sup>Required</sup> <a name="NotificationMetadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata"></a>

```csharp
public string NotificationMetadata { get; }
```

- *Type:* string

---

##### `NotificationTargetArn`<sup>Required</sup> <a name="NotificationTargetArn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn"></a>

```csharp
public string NotificationTargetArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLifecycleHookConfig <a name="AutoscalingLifecycleHookConfig" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingLifecycleHookConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutoscalingGroupName,
    string LifecycleTransition,
    string Name,
    string DefaultResult = null,
    double HeartbeatTimeout = null,
    string Id = null,
    string NotificationMetadata = null,
    string NotificationTargetArn = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition">LifecycleTransition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult">DefaultResult</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout">HeartbeatTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata">NotificationMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn">NotificationTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoscalingGroupName"></a>

```csharp
public string AutoscalingGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}.

---

##### `LifecycleTransition`<sup>Required</sup> <a name="LifecycleTransition" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition"></a>

```csharp
public string LifecycleTransition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}.

---

##### `DefaultResult`<sup>Optional</sup> <a name="DefaultResult" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult"></a>

```csharp
public string DefaultResult { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}.

---

##### `HeartbeatTimeout`<sup>Optional</sup> <a name="HeartbeatTimeout" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout"></a>

```csharp
public double HeartbeatTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationMetadata`<sup>Optional</sup> <a name="NotificationMetadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata"></a>

```csharp
public string NotificationMetadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}.

---

##### `NotificationTargetArn`<sup>Optional</sup> <a name="NotificationTargetArn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn"></a>

```csharp
public string NotificationTargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}.

---



