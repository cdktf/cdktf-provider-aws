# `cloudformationStackSetInstance` Submodule <a name="`cloudformationStackSetInstance` Submodule" id="@cdktf/provider-aws.cloudformationStackSetInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSetInstance <a name="CloudformationStackSetInstance" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstance(Construct Scope, string Id, CloudformationStackSetInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig">CloudformationStackSetInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig">CloudformationStackSetInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets">PutDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putOperationPreferences">PutOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetCallAs">ResetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetDeploymentTargets">ResetDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOperationPreferences">ResetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRetainStack">ResetRetainStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDeploymentTargets` <a name="PutDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets"></a>

```csharp
private void PutDeploymentTargets(CloudformationStackSetInstanceDeploymentTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---

##### `PutOperationPreferences` <a name="PutOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putOperationPreferences"></a>

```csharp
private void PutOperationPreferences(CloudformationStackSetInstanceOperationPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudformationStackSetInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetCallAs` <a name="ResetCallAs" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetCallAs"></a>

```csharp
private void ResetCallAs()
```

##### `ResetDeploymentTargets` <a name="ResetDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetDeploymentTargets"></a>

```csharp
private void ResetDeploymentTargets()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOperationPreferences` <a name="ResetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOperationPreferences"></a>

```csharp
private void ResetOperationPreferences()
```

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetParameterOverrides"></a>

```csharp
private void ResetParameterOverrides()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRetainStack` <a name="ResetRetainStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRetainStack"></a>

```csharp
private void ResetRetainStack()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudformationStackSetInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudformationStackSetInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudformationStackSetInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargets">DeploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference">CloudformationStackSetInstanceDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference">CloudformationStackSetInstanceOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.organizationalUnitId">OrganizationalUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference">CloudformationStackSetInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAsInput">CallAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargetsInput">DeploymentTargetsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferencesInput">OperationPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStackInput">RetainStackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetNameInput">StackSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAs">CallAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverrides">ParameterOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStack">RetainStack</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetName">StackSetName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeploymentTargets`<sup>Required</sup> <a name="DeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargets"></a>

```csharp
public CloudformationStackSetInstanceDeploymentTargetsOutputReference DeploymentTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference">CloudformationStackSetInstanceDeploymentTargetsOutputReference</a>

---

##### `OperationPreferences`<sup>Required</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferences"></a>

```csharp
public CloudformationStackSetInstanceOperationPreferencesOutputReference OperationPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference">CloudformationStackSetInstanceOperationPreferencesOutputReference</a>

---

##### `OrganizationalUnitId`<sup>Required</sup> <a name="OrganizationalUnitId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.organizationalUnitId"></a>

```csharp
public string OrganizationalUnitId { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeouts"></a>

```csharp
public CloudformationStackSetInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference">CloudformationStackSetInstanceTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CallAsInput`<sup>Optional</sup> <a name="CallAsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAsInput"></a>

```csharp
public string CallAsInput { get; }
```

- *Type:* string

---

##### `DeploymentTargetsInput`<sup>Optional</sup> <a name="DeploymentTargetsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargetsInput"></a>

```csharp
public CloudformationStackSetInstanceDeploymentTargets DeploymentTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OperationPreferencesInput`<sup>Optional</sup> <a name="OperationPreferencesInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.operationPreferencesInput"></a>

```csharp
public CloudformationStackSetInstanceOperationPreferences OperationPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverridesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterOverridesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RetainStackInput`<sup>Optional</sup> <a name="RetainStackInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStackInput"></a>

```csharp
public object RetainStackInput { get; }
```

- *Type:* object

---

##### `StackSetNameInput`<sup>Optional</sup> <a name="StackSetNameInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetNameInput"></a>

```csharp
public string StackSetNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CallAs`<sup>Required</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.callAs"></a>

```csharp
public string CallAs { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterOverrides { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RetainStack`<sup>Required</sup> <a name="RetainStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStack"></a>

```csharp
public object RetainStack { get; }
```

- *Type:* object

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetName"></a>

```csharp
public string StackSetName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetInstanceConfig <a name="CloudformationStackSetInstanceConfig" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StackSetName,
    string AccountId = null,
    string CallAs = null,
    CloudformationStackSetInstanceDeploymentTargets DeploymentTargets = null,
    string Id = null,
    CloudformationStackSetInstanceOperationPreferences OperationPreferences = null,
    System.Collections.Generic.IDictionary<string, string> ParameterOverrides = null,
    string Region = null,
    object RetainStack = null,
    CloudformationStackSetInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.stackSetName">StackSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.callAs">CallAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#call_as CloudformationStackSetInstance#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.deploymentTargets">DeploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | deployment_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.parameterOverrides">ParameterOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.retainStack">RetainStack</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.stackSetName"></a>

```csharp
public string StackSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}.

---

##### `CallAs`<sup>Optional</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.callAs"></a>

```csharp
public string CallAs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#call_as CloudformationStackSetInstance#call_as}.

---

##### `DeploymentTargets`<sup>Optional</sup> <a name="DeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.deploymentTargets"></a>

```csharp
public CloudformationStackSetInstanceDeploymentTargets DeploymentTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

deployment_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#deployment_targets CloudformationStackSetInstance#deployment_targets}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationPreferences`<sup>Optional</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.operationPreferences"></a>

```csharp
public CloudformationStackSetInstanceOperationPreferences OperationPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#operation_preferences CloudformationStackSetInstance#operation_preferences}

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.parameterOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterOverrides { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}.

---

##### `RetainStack`<sup>Optional</sup> <a name="RetainStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.retainStack"></a>

```csharp
public object RetainStack { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.timeouts"></a>

```csharp
public CloudformationStackSetInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#timeouts CloudformationStackSetInstance#timeouts}

---

### CloudformationStackSetInstanceDeploymentTargets <a name="CloudformationStackSetInstanceDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstanceDeploymentTargets {
    string[] OrganizationalUnitIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}. |

---

##### `OrganizationalUnitIds`<sup>Optional</sup> <a name="OrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}.

---

### CloudformationStackSetInstanceOperationPreferences <a name="CloudformationStackSetInstanceOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstanceOperationPreferences {
    double FailureToleranceCount = null,
    double FailureTolerancePercentage = null,
    double MaxConcurrentCount = null,
    double MaxConcurrentPercentage = null,
    string RegionConcurrencyType = null,
    string[] RegionOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_count CloudformationStackSetInstance#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_percentage CloudformationStackSetInstance#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_count CloudformationStackSetInstance#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_percentage CloudformationStackSetInstance#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_concurrency_type CloudformationStackSetInstance#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionOrder">RegionOrder</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_order CloudformationStackSetInstance#region_order}. |

---

##### `FailureToleranceCount`<sup>Optional</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureToleranceCount"></a>

```csharp
public double FailureToleranceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_count CloudformationStackSetInstance#failure_tolerance_count}.

---

##### `FailureTolerancePercentage`<sup>Optional</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.failureTolerancePercentage"></a>

```csharp
public double FailureTolerancePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_percentage CloudformationStackSetInstance#failure_tolerance_percentage}.

---

##### `MaxConcurrentCount`<sup>Optional</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentCount"></a>

```csharp
public double MaxConcurrentCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_count CloudformationStackSetInstance#max_concurrent_count}.

---

##### `MaxConcurrentPercentage`<sup>Optional</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.maxConcurrentPercentage"></a>

```csharp
public double MaxConcurrentPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_percentage CloudformationStackSetInstance#max_concurrent_percentage}.

---

##### `RegionConcurrencyType`<sup>Optional</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionConcurrencyType"></a>

```csharp
public string RegionConcurrencyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_concurrency_type CloudformationStackSetInstance#region_concurrency_type}.

---

##### `RegionOrder`<sup>Optional</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences.property.regionOrder"></a>

```csharp
public string[] RegionOrder { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_order CloudformationStackSetInstance#region_order}.

---

### CloudformationStackSetInstanceTimeouts <a name="CloudformationStackSetInstanceTimeouts" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetInstanceDeploymentTargetsOutputReference <a name="CloudformationStackSetInstanceDeploymentTargetsOutputReference" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstanceDeploymentTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resetOrganizationalUnitIds">ResetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationalUnitIds` <a name="ResetOrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resetOrganizationalUnitIds"></a>

```csharp
private void ResetOrganizationalUnitIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIdsInput">OrganizationalUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrganizationalUnitIdsInput`<sup>Optional</sup> <a name="OrganizationalUnitIdsInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIdsInput"></a>

```csharp
public string[] OrganizationalUnitIdsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.internalValue"></a>

```csharp
public CloudformationStackSetInstanceDeploymentTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---


### CloudformationStackSetInstanceOperationPreferencesOutputReference <a name="CloudformationStackSetInstanceOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstanceOperationPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureToleranceCount">ResetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureTolerancePercentage">ResetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentCount">ResetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentPercentage">ResetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionConcurrencyType">ResetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionOrder">ResetRegionOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureToleranceCount` <a name="ResetFailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```csharp
private void ResetFailureToleranceCount()
```

##### `ResetFailureTolerancePercentage` <a name="ResetFailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```csharp
private void ResetFailureTolerancePercentage()
```

##### `ResetMaxConcurrentCount` <a name="ResetMaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```csharp
private void ResetMaxConcurrentCount()
```

##### `ResetMaxConcurrentPercentage` <a name="ResetMaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```csharp
private void ResetMaxConcurrentPercentage()
```

##### `ResetRegionConcurrencyType` <a name="ResetRegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```csharp
private void ResetRegionConcurrencyType()
```

##### `ResetRegionOrder` <a name="ResetRegionOrder" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.resetRegionOrder"></a>

```csharp
private void ResetRegionOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCountInput">FailureToleranceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentageInput">FailureTolerancePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCountInput">MaxConcurrentCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">MaxConcurrentPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">RegionConcurrencyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrderInput">RegionOrderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrder">RegionOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureToleranceCountInput`<sup>Optional</sup> <a name="FailureToleranceCountInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```csharp
public double FailureToleranceCountInput { get; }
```

- *Type:* double

---

##### `FailureTolerancePercentageInput`<sup>Optional</sup> <a name="FailureTolerancePercentageInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```csharp
public double FailureTolerancePercentageInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentCountInput`<sup>Optional</sup> <a name="MaxConcurrentCountInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```csharp
public double MaxConcurrentCountInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentPercentageInput`<sup>Optional</sup> <a name="MaxConcurrentPercentageInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```csharp
public double MaxConcurrentPercentageInput { get; }
```

- *Type:* double

---

##### `RegionConcurrencyTypeInput`<sup>Optional</sup> <a name="RegionConcurrencyTypeInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```csharp
public string RegionConcurrencyTypeInput { get; }
```

- *Type:* string

---

##### `RegionOrderInput`<sup>Optional</sup> <a name="RegionOrderInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrderInput"></a>

```csharp
public string[] RegionOrderInput { get; }
```

- *Type:* string[]

---

##### `FailureToleranceCount`<sup>Required</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```csharp
public double FailureToleranceCount { get; }
```

- *Type:* double

---

##### `FailureTolerancePercentage`<sup>Required</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```csharp
public double FailureTolerancePercentage { get; }
```

- *Type:* double

---

##### `MaxConcurrentCount`<sup>Required</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```csharp
public double MaxConcurrentCount { get; }
```

- *Type:* double

---

##### `MaxConcurrentPercentage`<sup>Required</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```csharp
public double MaxConcurrentPercentage { get; }
```

- *Type:* double

---

##### `RegionConcurrencyType`<sup>Required</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```csharp
public string RegionConcurrencyType { get; }
```

- *Type:* string

---

##### `RegionOrder`<sup>Required</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.regionOrder"></a>

```csharp
public string[] RegionOrder { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferencesOutputReference.property.internalValue"></a>

```csharp
public CloudformationStackSetInstanceOperationPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceOperationPreferences">CloudformationStackSetInstanceOperationPreferences</a>

---


### CloudformationStackSetInstanceTimeoutsOutputReference <a name="CloudformationStackSetInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackSetInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



