# `sesReceiptRule` Submodule <a name="`sesReceiptRule` Submodule" id="@cdktf/provider-aws.sesReceiptRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesReceiptRule <a name="SesReceiptRule" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule aws_ses_receipt_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRule(Construct Scope, string Id, SesReceiptRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig">SesReceiptRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig">SesReceiptRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction">PutAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction">PutBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction">PutLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action">PutS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction">PutSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction">PutStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction">PutWorkmailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction">ResetAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter">ResetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction">ResetBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction">ResetLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients">ResetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action">ResetS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled">ResetScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction">ResetSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction">ResetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy">ResetTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction">ResetWorkmailAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAddHeaderAction` <a name="PutAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction"></a>

```csharp
private void PutAddHeaderAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction.parameter.value"></a>

- *Type:* object

---

##### `PutBounceAction` <a name="PutBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction"></a>

```csharp
private void PutBounceAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction.parameter.value"></a>

- *Type:* object

---

##### `PutLambdaAction` <a name="PutLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction"></a>

```csharp
private void PutLambdaAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction.parameter.value"></a>

- *Type:* object

---

##### `PutS3Action` <a name="PutS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action"></a>

```csharp
private void PutS3Action(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action.parameter.value"></a>

- *Type:* object

---

##### `PutSnsAction` <a name="PutSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction"></a>

```csharp
private void PutSnsAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction.parameter.value"></a>

- *Type:* object

---

##### `PutStopAction` <a name="PutStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction"></a>

```csharp
private void PutStopAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction.parameter.value"></a>

- *Type:* object

---

##### `PutWorkmailAction` <a name="PutWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction"></a>

```csharp
private void PutWorkmailAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction.parameter.value"></a>

- *Type:* object

---

##### `ResetAddHeaderAction` <a name="ResetAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction"></a>

```csharp
private void ResetAddHeaderAction()
```

##### `ResetAfter` <a name="ResetAfter" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter"></a>

```csharp
private void ResetAfter()
```

##### `ResetBounceAction` <a name="ResetBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction"></a>

```csharp
private void ResetBounceAction()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLambdaAction` <a name="ResetLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction"></a>

```csharp
private void ResetLambdaAction()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients"></a>

```csharp
private void ResetRecipients()
```

##### `ResetS3Action` <a name="ResetS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action"></a>

```csharp
private void ResetS3Action()
```

##### `ResetScanEnabled` <a name="ResetScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled"></a>

```csharp
private void ResetScanEnabled()
```

##### `ResetSnsAction` <a name="ResetSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction"></a>

```csharp
private void ResetSnsAction()
```

##### `ResetStopAction` <a name="ResetStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction"></a>

```csharp
private void ResetStopAction()
```

##### `ResetTlsPolicy` <a name="ResetTlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy"></a>

```csharp
private void ResetTlsPolicy()
```

##### `ResetWorkmailAction` <a name="ResetWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction"></a>

```csharp
private void ResetWorkmailAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SesReceiptRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SesReceiptRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SesReceiptRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction">AddHeaderAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction">BounceAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction">LambdaAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action">S3Action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction">SnsAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction">StopAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction">WorkmailAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput">AddHeaderActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput">AfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput">BounceActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput">LambdaActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput">RuleSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput">S3ActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput">ScanEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput">SnsActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput">StopActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput">TlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput">WorkmailActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after">After</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName">RuleSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled">ScanEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy">TlsPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AddHeaderAction`<sup>Required</sup> <a name="AddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction"></a>

```csharp
public SesReceiptRuleAddHeaderActionList AddHeaderAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BounceAction`<sup>Required</sup> <a name="BounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction"></a>

```csharp
public SesReceiptRuleBounceActionList BounceAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a>

---

##### `LambdaAction`<sup>Required</sup> <a name="LambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction"></a>

```csharp
public SesReceiptRuleLambdaActionList LambdaAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a>

---

##### `S3Action`<sup>Required</sup> <a name="S3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action"></a>

```csharp
public SesReceiptRuleS3ActionList S3Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a>

---

##### `SnsAction`<sup>Required</sup> <a name="SnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction"></a>

```csharp
public SesReceiptRuleSnsActionList SnsAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a>

---

##### `StopAction`<sup>Required</sup> <a name="StopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction"></a>

```csharp
public SesReceiptRuleStopActionList StopAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a>

---

##### `WorkmailAction`<sup>Required</sup> <a name="WorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction"></a>

```csharp
public SesReceiptRuleWorkmailActionList WorkmailAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a>

---

##### `AddHeaderActionInput`<sup>Optional</sup> <a name="AddHeaderActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput"></a>

```csharp
public object AddHeaderActionInput { get; }
```

- *Type:* object

---

##### `AfterInput`<sup>Optional</sup> <a name="AfterInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput"></a>

```csharp
public string AfterInput { get; }
```

- *Type:* string

---

##### `BounceActionInput`<sup>Optional</sup> <a name="BounceActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput"></a>

```csharp
public object BounceActionInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LambdaActionInput`<sup>Optional</sup> <a name="LambdaActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput"></a>

```csharp
public object LambdaActionInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `RuleSetNameInput`<sup>Optional</sup> <a name="RuleSetNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput"></a>

```csharp
public string RuleSetNameInput { get; }
```

- *Type:* string

---

##### `S3ActionInput`<sup>Optional</sup> <a name="S3ActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput"></a>

```csharp
public object S3ActionInput { get; }
```

- *Type:* object

---

##### `ScanEnabledInput`<sup>Optional</sup> <a name="ScanEnabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput"></a>

```csharp
public object ScanEnabledInput { get; }
```

- *Type:* object

---

##### `SnsActionInput`<sup>Optional</sup> <a name="SnsActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput"></a>

```csharp
public object SnsActionInput { get; }
```

- *Type:* object

---

##### `StopActionInput`<sup>Optional</sup> <a name="StopActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput"></a>

```csharp
public object StopActionInput { get; }
```

- *Type:* object

---

##### `TlsPolicyInput`<sup>Optional</sup> <a name="TlsPolicyInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput"></a>

```csharp
public string TlsPolicyInput { get; }
```

- *Type:* string

---

##### `WorkmailActionInput`<sup>Optional</sup> <a name="WorkmailActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput"></a>

```csharp
public object WorkmailActionInput { get; }
```

- *Type:* object

---

##### `After`<sup>Required</sup> <a name="After" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after"></a>

```csharp
public string After { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName"></a>

```csharp
public string RuleSetName { get; }
```

- *Type:* string

---

##### `ScanEnabled`<sup>Required</sup> <a name="ScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled"></a>

```csharp
public object ScanEnabled { get; }
```

- *Type:* object

---

##### `TlsPolicy`<sup>Required</sup> <a name="TlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy"></a>

```csharp
public string TlsPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesReceiptRuleAddHeaderAction <a name="SesReceiptRuleAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleAddHeaderAction {
    string HeaderName,
    string HeaderValue,
    double Position
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName">HeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue">HeaderValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}.

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue"></a>

```csharp
public string HeaderValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

### SesReceiptRuleBounceAction <a name="SesReceiptRuleBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleBounceAction {
    string Message,
    double Position,
    string Sender,
    string SmtpReplyCode,
    string StatusCode = null,
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender">Sender</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode">SmtpReplyCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `Sender`<sup>Required</sup> <a name="Sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender"></a>

```csharp
public string Sender { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}.

---

##### `SmtpReplyCode`<sup>Required</sup> <a name="SmtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode"></a>

```csharp
public string SmtpReplyCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleConfig <a name="SesReceiptRuleConfig" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RuleSetName,
    object AddHeaderAction = null,
    string After = null,
    object BounceAction = null,
    object Enabled = null,
    string Id = null,
    object LambdaAction = null,
    string[] Recipients = null,
    object S3Action = null,
    object ScanEnabled = null,
    object SnsAction = null,
    object StopAction = null,
    string TlsPolicy = null,
    object WorkmailAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName">RuleSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction">AddHeaderAction</a></code> | <code>object</code> | add_header_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after">After</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction">BounceAction</a></code> | <code>object</code> | bounce_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction">LambdaAction</a></code> | <code>object</code> | lambda_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients">Recipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action">S3Action</a></code> | <code>object</code> | s3_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled">ScanEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction">SnsAction</a></code> | <code>object</code> | sns_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction">StopAction</a></code> | <code>object</code> | stop_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy">TlsPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction">WorkmailAction</a></code> | <code>object</code> | workmail_action block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}.

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName"></a>

```csharp
public string RuleSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}.

---

##### `AddHeaderAction`<sup>Optional</sup> <a name="AddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction"></a>

```csharp
public object AddHeaderAction { get; set; }
```

- *Type:* object

add_header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}

---

##### `After`<sup>Optional</sup> <a name="After" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after"></a>

```csharp
public string After { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}.

---

##### `BounceAction`<sup>Optional</sup> <a name="BounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction"></a>

```csharp
public object BounceAction { get; set; }
```

- *Type:* object

bounce_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaAction`<sup>Optional</sup> <a name="LambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction"></a>

```csharp
public object LambdaAction { get; set; }
```

- *Type:* object

lambda_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}.

---

##### `S3Action`<sup>Optional</sup> <a name="S3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action"></a>

```csharp
public object S3Action { get; set; }
```

- *Type:* object

s3_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}

---

##### `ScanEnabled`<sup>Optional</sup> <a name="ScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled"></a>

```csharp
public object ScanEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}.

---

##### `SnsAction`<sup>Optional</sup> <a name="SnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction"></a>

```csharp
public object SnsAction { get; set; }
```

- *Type:* object

sns_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}

---

##### `StopAction`<sup>Optional</sup> <a name="StopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction"></a>

```csharp
public object StopAction { get; set; }
```

- *Type:* object

stop_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}

---

##### `TlsPolicy`<sup>Optional</sup> <a name="TlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy"></a>

```csharp
public string TlsPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}.

---

##### `WorkmailAction`<sup>Optional</sup> <a name="WorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction"></a>

```csharp
public object WorkmailAction { get; set; }
```

- *Type:* object

workmail_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}

---

### SesReceiptRuleLambdaAction <a name="SesReceiptRuleLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleLambdaAction {
    string FunctionArn,
    double Position,
    string InvocationType = null,
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn">FunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType">InvocationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn"></a>

```csharp
public string FunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType"></a>

```csharp
public string InvocationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleS3Action <a name="SesReceiptRuleS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleS3Action {
    string BucketName,
    double Position,
    string KmsKeyArn = null,
    string ObjectKeyPrefix = null,
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}.

---

##### `ObjectKeyPrefix`<sup>Optional</sup> <a name="ObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix"></a>

```csharp
public string ObjectKeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleSnsAction <a name="SesReceiptRuleSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleSnsAction {
    double Position,
    string TopicArn,
    string Encoding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}. |

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}.

---

### SesReceiptRuleStopAction <a name="SesReceiptRuleStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleStopAction {
    double Position,
    string Scope,
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleWorkmailAction <a name="SesReceiptRuleWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleWorkmailAction {
    string OrganizationArn,
    double Position,
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn">OrganizationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `OrganizationArn`<sup>Required</sup> <a name="OrganizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn"></a>

```csharp
public string OrganizationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesReceiptRuleAddHeaderActionList <a name="SesReceiptRuleAddHeaderActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleAddHeaderActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get"></a>

```csharp
private SesReceiptRuleAddHeaderActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleAddHeaderActionOutputReference <a name="SesReceiptRuleAddHeaderActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleAddHeaderActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput"></a>

```csharp
public string HeaderValueInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleBounceActionList <a name="SesReceiptRuleBounceActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleBounceActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get"></a>

```csharp
private SesReceiptRuleBounceActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleBounceActionOutputReference <a name="SesReceiptRuleBounceActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleBounceActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput">SenderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput">SmtpReplyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender">Sender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode">SmtpReplyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `SenderInput`<sup>Optional</sup> <a name="SenderInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput"></a>

```csharp
public string SenderInput { get; }
```

- *Type:* string

---

##### `SmtpReplyCodeInput`<sup>Optional</sup> <a name="SmtpReplyCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput"></a>

```csharp
public string SmtpReplyCodeInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `Sender`<sup>Required</sup> <a name="Sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender"></a>

```csharp
public string Sender { get; }
```

- *Type:* string

---

##### `SmtpReplyCode`<sup>Required</sup> <a name="SmtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode"></a>

```csharp
public string SmtpReplyCode { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleLambdaActionList <a name="SesReceiptRuleLambdaActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleLambdaActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get"></a>

```csharp
private SesReceiptRuleLambdaActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleLambdaActionOutputReference <a name="SesReceiptRuleLambdaActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleLambdaActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType"></a>

```csharp
private void ResetInvocationType()
```

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType">InvocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput"></a>

```csharp
public string FunctionArnInput { get; }
```

- *Type:* string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput"></a>

```csharp
public string InvocationTypeInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType"></a>

```csharp
public string InvocationType { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleS3ActionList <a name="SesReceiptRuleS3ActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleS3ActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get"></a>

```csharp
private SesReceiptRuleS3ActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleS3ActionOutputReference <a name="SesReceiptRuleS3ActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleS3ActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix">ResetObjectKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetObjectKeyPrefix` <a name="ResetObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix"></a>

```csharp
private void ResetObjectKeyPrefix()
```

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput">ObjectKeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `ObjectKeyPrefixInput`<sup>Optional</sup> <a name="ObjectKeyPrefixInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput"></a>

```csharp
public string ObjectKeyPrefixInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `ObjectKeyPrefix`<sup>Required</sup> <a name="ObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix"></a>

```csharp
public string ObjectKeyPrefix { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleSnsActionList <a name="SesReceiptRuleSnsActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleSnsActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get"></a>

```csharp
private SesReceiptRuleSnsActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleSnsActionOutputReference <a name="SesReceiptRuleSnsActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleSnsActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleStopActionList <a name="SesReceiptRuleStopActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleStopActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get"></a>

```csharp
private SesReceiptRuleStopActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleStopActionOutputReference <a name="SesReceiptRuleStopActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleStopActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleWorkmailActionList <a name="SesReceiptRuleWorkmailActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleWorkmailActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get"></a>

```csharp
private SesReceiptRuleWorkmailActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SesReceiptRuleWorkmailActionOutputReference <a name="SesReceiptRuleWorkmailActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesReceiptRuleWorkmailActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput">OrganizationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn">OrganizationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrganizationArnInput`<sup>Optional</sup> <a name="OrganizationArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput"></a>

```csharp
public string OrganizationArnInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `OrganizationArn`<sup>Required</sup> <a name="OrganizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn"></a>

```csharp
public string OrganizationArn { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



