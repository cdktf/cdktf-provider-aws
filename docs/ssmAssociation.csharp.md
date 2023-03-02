# `ssmAssociation` Submodule <a name="`ssmAssociation` Submodule" id="@cdktf/provider-aws.ssmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmAssociation <a name="SsmAssociation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_association aws_ssm_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmAssociation(Construct Scope, string Id, SsmAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation">PutOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval">ResetApplyOnlyAtCronInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAssociationName">ResetAssociationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName">ResetAutomationTargetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetComplianceSeverity">ResetComplianceSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxErrors">ResetMaxErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds">ResetWaitForSuccessTimeoutSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutOutputLocation` <a name="PutOutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation"></a>

```csharp
private void PutOutputLocation(SsmAssociationOutputLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putTargets"></a>

```csharp
private void PutTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.putTargets.parameter.value"></a>

- *Type:* object

---

##### `ResetApplyOnlyAtCronInterval` <a name="ResetApplyOnlyAtCronInterval" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval"></a>

```csharp
private void ResetApplyOnlyAtCronInterval()
```

##### `ResetAssociationName` <a name="ResetAssociationName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAssociationName"></a>

```csharp
private void ResetAssociationName()
```

##### `ResetAutomationTargetParameterName` <a name="ResetAutomationTargetParameterName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName"></a>

```csharp
private void ResetAutomationTargetParameterName()
```

##### `ResetComplianceSeverity` <a name="ResetComplianceSeverity" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetComplianceSeverity"></a>

```csharp
private void ResetComplianceSeverity()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetDocumentVersion"></a>

```csharp
private void ResetDocumentVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxConcurrency"></a>

```csharp
private void ResetMaxConcurrency()
```

##### `ResetMaxErrors` <a name="ResetMaxErrors" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetMaxErrors"></a>

```csharp
private void ResetMaxErrors()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetOutputLocation"></a>

```csharp
private void ResetOutputLocation()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetWaitForSuccessTimeoutSeconds` <a name="ResetWaitForSuccessTimeoutSeconds" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds"></a>

```csharp
private void ResetWaitForSuccessTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput">ApplyOnlyAtCronIntervalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationNameInput">AssociationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput">AutomationTargetParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverityInput">ComplianceSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersionInput">DocumentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrorsInput">MaxErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocationInput">OutputLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targetsInput">TargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput">WaitForSuccessTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationName">AssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverity">ComplianceSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrency">MaxConcurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrors">MaxErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocation"></a>

```csharp
public SsmAssociationOutputLocationOutputReference OutputLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targets"></a>

```csharp
public SsmAssociationTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a>

---

##### `ApplyOnlyAtCronIntervalInput`<sup>Optional</sup> <a name="ApplyOnlyAtCronIntervalInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput"></a>

```csharp
public object ApplyOnlyAtCronIntervalInput { get; }
```

- *Type:* object

---

##### `AssociationNameInput`<sup>Optional</sup> <a name="AssociationNameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationNameInput"></a>

```csharp
public string AssociationNameInput { get; }
```

- *Type:* string

---

##### `AutomationTargetParameterNameInput`<sup>Optional</sup> <a name="AutomationTargetParameterNameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput"></a>

```csharp
public string AutomationTargetParameterNameInput { get; }
```

- *Type:* string

---

##### `ComplianceSeverityInput`<sup>Optional</sup> <a name="ComplianceSeverityInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverityInput"></a>

```csharp
public string ComplianceSeverityInput { get; }
```

- *Type:* string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersionInput"></a>

```csharp
public string DocumentVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrencyInput"></a>

```csharp
public string MaxConcurrencyInput { get; }
```

- *Type:* string

---

##### `MaxErrorsInput`<sup>Optional</sup> <a name="MaxErrorsInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrorsInput"></a>

```csharp
public string MaxErrorsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.outputLocationInput"></a>

```csharp
public SsmAssociationOutputLocation OutputLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.targetsInput"></a>

```csharp
public object TargetsInput { get; }
```

- *Type:* object

---

##### `WaitForSuccessTimeoutSecondsInput`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSecondsInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput"></a>

```csharp
public double WaitForSuccessTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ApplyOnlyAtCronInterval`<sup>Required</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval"></a>

```csharp
public object ApplyOnlyAtCronInterval { get; }
```

- *Type:* object

---

##### `AssociationName`<sup>Required</sup> <a name="AssociationName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.associationName"></a>

```csharp
public string AssociationName { get; }
```

- *Type:* string

---

##### `AutomationTargetParameterName`<sup>Required</sup> <a name="AutomationTargetParameterName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterName"></a>

```csharp
public string AutomationTargetParameterName { get; }
```

- *Type:* string

---

##### `ComplianceSeverity`<sup>Required</sup> <a name="ComplianceSeverity" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverity"></a>

```csharp
public string ComplianceSeverity { get; }
```

- *Type:* string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrency"></a>

```csharp
public string MaxConcurrency { get; }
```

- *Type:* string

---

##### `MaxErrors`<sup>Required</sup> <a name="MaxErrors" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.maxErrors"></a>

```csharp
public string MaxErrors { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `WaitForSuccessTimeoutSeconds`<sup>Required</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds"></a>

```csharp
public double WaitForSuccessTimeoutSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmAssociation.SsmAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmAssociationConfig <a name="SsmAssociationConfig" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object ApplyOnlyAtCronInterval = null,
    string AssociationName = null,
    string AutomationTargetParameterName = null,
    string ComplianceSeverity = null,
    string DocumentVersion = null,
    string Id = null,
    string InstanceId = null,
    string MaxConcurrency = null,
    string MaxErrors = null,
    SsmAssociationOutputLocation OutputLocation = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string ScheduleExpression = null,
    object Targets = null,
    double WaitForSuccessTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#name SsmAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.associationName">AssociationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#association_name SsmAssociation#association_name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.complianceSeverity">ComplianceSeverity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#document_version SsmAssociation#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#id SsmAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#instance_id SsmAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxErrors">MaxErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | output_location block. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#parameters SsmAssociation#parameters}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#schedule_expression SsmAssociation#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.targets">Targets</a></code> | <code>object</code> | targets block. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#name SsmAssociation#name}.

---

##### `ApplyOnlyAtCronInterval`<sup>Optional</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval"></a>

```csharp
public object ApplyOnlyAtCronInterval { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `AssociationName`<sup>Optional</sup> <a name="AssociationName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.associationName"></a>

```csharp
public string AssociationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#association_name SsmAssociation#association_name}.

---

##### `AutomationTargetParameterName`<sup>Optional</sup> <a name="AutomationTargetParameterName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName"></a>

```csharp
public string AutomationTargetParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `ComplianceSeverity`<sup>Optional</sup> <a name="ComplianceSeverity" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.complianceSeverity"></a>

```csharp
public string ComplianceSeverity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#document_version SsmAssociation#document_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#id SsmAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#instance_id SsmAssociation#instance_id}.

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxConcurrency"></a>

```csharp
public string MaxConcurrency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `MaxErrors`<sup>Optional</sup> <a name="MaxErrors" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxErrors"></a>

```csharp
public string MaxErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.outputLocation"></a>

```csharp
public SsmAssociationOutputLocation OutputLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#output_location SsmAssociation#output_location}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#parameters SsmAssociation#parameters}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#schedule_expression SsmAssociation#schedule_expression}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.targets"></a>

```csharp
public object Targets { get; set; }
```

- *Type:* object

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#targets SsmAssociation#targets}

---

##### `WaitForSuccessTimeoutSeconds`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds"></a>

```csharp
public double WaitForSuccessTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

### SsmAssociationOutputLocation <a name="SsmAssociationOutputLocation" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmAssociationOutputLocation {
    string S3BucketName,
    string S3KeyPrefix = null,
    string S3Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3Region">S3Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_region SsmAssociation#s3_region}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}.

---

##### `S3Region`<sup>Optional</sup> <a name="S3Region" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3Region"></a>

```csharp
public string S3Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#s3_region SsmAssociation#s3_region}.

---

### SsmAssociationTargets <a name="SsmAssociationTargets" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmAssociationTargets {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#key SsmAssociation#key}. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#values SsmAssociation#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#key SsmAssociation#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargets.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association#values SsmAssociation#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmAssociationOutputLocationOutputReference <a name="SsmAssociationOutputLocationOutputReference" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmAssociationOutputLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Region">ResetS3Region</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```

##### `ResetS3Region` <a name="ResetS3Region" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Region"></a>

```csharp
private void ResetS3Region()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3RegionInput">S3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Region">S3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3RegionInput"></a>

```csharp
public string S3RegionInput { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Region"></a>

```csharp
public string S3Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue"></a>

```csharp
public SsmAssociationOutputLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---


### SsmAssociationTargetsList <a name="SsmAssociationTargetsList" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmAssociationTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.get"></a>

```csharp
private SsmAssociationTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmAssociationTargetsOutputReference <a name="SsmAssociationTargetsOutputReference" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmAssociationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



