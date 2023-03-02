# `cloudformationStack` Submodule <a name="`cloudformationStack` Submodule" id="@cdktf/provider-aws.cloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStack <a name="CloudformationStack" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack aws_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStack(Construct Scope, string Id, CloudformationStackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig">CloudformationStackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig">CloudformationStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetDisableRollback">ResetDisableRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetNotificationArns">ResetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyBody">ResetPolicyBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyUrl">ResetPolicyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateUrl">ResetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeoutInMinutes">ResetTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudformationStackTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a>

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetDisableRollback` <a name="ResetDisableRollback" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetDisableRollback"></a>

```csharp
private void ResetDisableRollback()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationArns` <a name="ResetNotificationArns" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetNotificationArns"></a>

```csharp
private void ResetNotificationArns()
```

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPolicyBody` <a name="ResetPolicyBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyBody"></a>

```csharp
private void ResetPolicyBody()
```

##### `ResetPolicyUrl` <a name="ResetPolicyUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetPolicyUrl"></a>

```csharp
private void ResetPolicyUrl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateBody"></a>

```csharp
private void ResetTemplateBody()
```

##### `ResetTemplateUrl` <a name="ResetTemplateUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTemplateUrl"></a>

```csharp
private void ResetTemplateUrl()
```

##### `ResetTimeoutInMinutes` <a name="ResetTimeoutInMinutes" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeoutInMinutes"></a>

```csharp
private void ResetTimeoutInMinutes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudformationStack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudformationStack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudformationStack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.outputs">Outputs</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference">CloudformationStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollbackInput">DisableRollbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArnsInput">NotificationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailureInput">OnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBodyInput">PolicyBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrlInput">PolicyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBodyInput">TemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrlInput">TemplateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput">TimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollback">DisableRollback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailure">OnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBody">PolicyBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrl">PolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBody">TemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrl">TemplateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.outputs"></a>

```csharp
public StringMap Outputs { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeouts"></a>

```csharp
public CloudformationStackTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference">CloudformationStackTimeoutsOutputReference</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilitiesInput"></a>

```csharp
public string[] CapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `DisableRollbackInput`<sup>Optional</sup> <a name="DisableRollbackInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollbackInput"></a>

```csharp
public object DisableRollbackInput { get; }
```

- *Type:* object

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationArnsInput`<sup>Optional</sup> <a name="NotificationArnsInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArnsInput"></a>

```csharp
public string[] NotificationArnsInput { get; }
```

- *Type:* string[]

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailureInput"></a>

```csharp
public string OnFailureInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PolicyBodyInput`<sup>Optional</sup> <a name="PolicyBodyInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBodyInput"></a>

```csharp
public string PolicyBodyInput { get; }
```

- *Type:* string

---

##### `PolicyUrlInput`<sup>Optional</sup> <a name="PolicyUrlInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrlInput"></a>

```csharp
public string PolicyUrlInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBodyInput"></a>

```csharp
public string TemplateBodyInput { get; }
```

- *Type:* string

---

##### `TemplateUrlInput`<sup>Optional</sup> <a name="TemplateUrlInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrlInput"></a>

```csharp
public string TemplateUrlInput { get; }
```

- *Type:* string

---

##### `TimeoutInMinutesInput`<sup>Optional</sup> <a name="TimeoutInMinutesInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput"></a>

```csharp
public double TimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `DisableRollback`<sup>Required</sup> <a name="DisableRollback" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.disableRollback"></a>

```csharp
public object DisableRollback { get; }
```

- *Type:* object

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; }
```

- *Type:* string[]

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.onFailure"></a>

```csharp
public string OnFailure { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PolicyBody`<sup>Required</sup> <a name="PolicyBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyBody"></a>

```csharp
public string PolicyBody { get; }
```

- *Type:* string

---

##### `PolicyUrl`<sup>Required</sup> <a name="PolicyUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.policyUrl"></a>

```csharp
public string PolicyUrl { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateBody"></a>

```csharp
public string TemplateBody { get; }
```

- *Type:* string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.templateUrl"></a>

```csharp
public string TemplateUrl { get; }
```

- *Type:* string

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudformationStack.CloudformationStack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackConfig <a name="CloudformationStackConfig" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] Capabilities = null,
    object DisableRollback = null,
    string IamRoleArn = null,
    string Id = null,
    string[] NotificationArns = null,
    string OnFailure = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string PolicyBody = null,
    string PolicyUrl = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TemplateBody = null,
    string TemplateUrl = null,
    double TimeoutInMinutes = null,
    CloudformationStackTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#name CloudformationStack#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.capabilities">Capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#capabilities CloudformationStack#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.disableRollback">DisableRollback</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#iam_role_arn CloudformationStack#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#id CloudformationStack#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#notification_arns CloudformationStack#notification_arns}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.onFailure">OnFailure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#on_failure CloudformationStack#on_failure}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#parameters CloudformationStack#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyBody">PolicyBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_body CloudformationStack#policy_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyUrl">PolicyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_url CloudformationStack#policy_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags CloudformationStack#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags_all CloudformationStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateBody">TemplateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_body CloudformationStack#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateUrl">TemplateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_url CloudformationStack#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#name CloudformationStack#name}.

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.capabilities"></a>

```csharp
public string[] Capabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#capabilities CloudformationStack#capabilities}.

---

##### `DisableRollback`<sup>Optional</sup> <a name="DisableRollback" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.disableRollback"></a>

```csharp
public object DisableRollback { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#iam_role_arn CloudformationStack#iam_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#id CloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationArns`<sup>Optional</sup> <a name="NotificationArns" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#notification_arns CloudformationStack#notification_arns}.

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.onFailure"></a>

```csharp
public string OnFailure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#on_failure CloudformationStack#on_failure}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#parameters CloudformationStack#parameters}.

---

##### `PolicyBody`<sup>Optional</sup> <a name="PolicyBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyBody"></a>

```csharp
public string PolicyBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_body CloudformationStack#policy_body}.

---

##### `PolicyUrl`<sup>Optional</sup> <a name="PolicyUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.policyUrl"></a>

```csharp
public string PolicyUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#policy_url CloudformationStack#policy_url}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags CloudformationStack#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#tags_all CloudformationStack#tags_all}.

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateBody"></a>

```csharp
public string TemplateBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_body CloudformationStack#template_body}.

---

##### `TemplateUrl`<sup>Optional</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.templateUrl"></a>

```csharp
public string TemplateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#template_url CloudformationStack#template_url}.

---

##### `TimeoutInMinutes`<sup>Optional</sup> <a name="TimeoutInMinutes" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackConfig.property.timeouts"></a>

```csharp
public CloudformationStackTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts">CloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#timeouts CloudformationStack#timeouts}

---

### CloudformationStackTimeouts <a name="CloudformationStackTimeouts" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#create CloudformationStack#create}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#delete CloudformationStack#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#update CloudformationStack#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#create CloudformationStack#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#delete CloudformationStack#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack#update CloudformationStack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackTimeoutsOutputReference <a name="CloudformationStackTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudformationStackTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStack.CloudformationStackTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



