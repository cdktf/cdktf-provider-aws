# `lambdaPermission` Submodule <a name="`lambdaPermission` Submodule" id="@cdktf/provider-aws.lambdaPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaPermission <a name="LambdaPermission" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission aws_lambda_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaPermission(Construct Scope, string Id, LambdaPermissionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken">ResetEventSourceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType">ResetFunctionUrlAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId">ResetPrincipalOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetQualifier">ResetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount">ResetSourceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn">ResetSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementId">ResetStatementId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix">ResetStatementIdPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEventSourceToken` <a name="ResetEventSourceToken" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken"></a>

```csharp
private void ResetEventSourceToken()
```

##### `ResetFunctionUrlAuthType` <a name="ResetFunctionUrlAuthType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType"></a>

```csharp
private void ResetFunctionUrlAuthType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalOrgId` <a name="ResetPrincipalOrgId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId"></a>

```csharp
private void ResetPrincipalOrgId()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetQualifier"></a>

```csharp
private void ResetQualifier()
```

##### `ResetSourceAccount` <a name="ResetSourceAccount" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount"></a>

```csharp
private void ResetSourceAccount()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn"></a>

```csharp
private void ResetSourceArn()
```

##### `ResetStatementId` <a name="ResetStatementId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementId"></a>

```csharp
private void ResetStatementId()
```

##### `ResetStatementIdPrefix` <a name="ResetStatementIdPrefix" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix"></a>

```csharp
private void ResetStatementIdPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaPermission.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaPermission.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaPermission.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput">EventSourceTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput">FunctionUrlAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput">PrincipalOrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput">SourceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput">StatementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput">StatementIdPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken">EventSourceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType">FunctionUrlAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId">PrincipalOrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount">SourceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementId">StatementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix">StatementIdPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `EventSourceTokenInput`<sup>Optional</sup> <a name="EventSourceTokenInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput"></a>

```csharp
public string EventSourceTokenInput { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `FunctionUrlAuthTypeInput`<sup>Optional</sup> <a name="FunctionUrlAuthTypeInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput"></a>

```csharp
public string FunctionUrlAuthTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `PrincipalOrgIdInput`<sup>Optional</sup> <a name="PrincipalOrgIdInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput"></a>

```csharp
public string PrincipalOrgIdInput { get; }
```

- *Type:* string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `SourceAccountInput`<sup>Optional</sup> <a name="SourceAccountInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput"></a>

```csharp
public string SourceAccountInput { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `StatementIdInput`<sup>Optional</sup> <a name="StatementIdInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput"></a>

```csharp
public string StatementIdInput { get; }
```

- *Type:* string

---

##### `StatementIdPrefixInput`<sup>Optional</sup> <a name="StatementIdPrefixInput" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput"></a>

```csharp
public string StatementIdPrefixInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `EventSourceToken`<sup>Required</sup> <a name="EventSourceToken" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken"></a>

```csharp
public string EventSourceToken { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `FunctionUrlAuthType`<sup>Required</sup> <a name="FunctionUrlAuthType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType"></a>

```csharp
public string FunctionUrlAuthType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `PrincipalOrgId`<sup>Required</sup> <a name="PrincipalOrgId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId"></a>

```csharp
public string PrincipalOrgId { get; }
```

- *Type:* string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

##### `SourceAccount`<sup>Required</sup> <a name="SourceAccount" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount"></a>

```csharp
public string SourceAccount { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementId"></a>

```csharp
public string StatementId { get; }
```

- *Type:* string

---

##### `StatementIdPrefix`<sup>Required</sup> <a name="StatementIdPrefix" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix"></a>

```csharp
public string StatementIdPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaPermissionConfig <a name="LambdaPermissionConfig" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaPermissionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string FunctionName,
    string Principal,
    string EventSourceToken = null,
    string FunctionUrlAuthType = null,
    string Id = null,
    string PrincipalOrgId = null,
    string Qualifier = null,
    string SourceAccount = null,
    string SourceArn = null,
    string StatementId = null,
    string StatementIdPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#action LambdaPermission#action}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_name LambdaPermission#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal LambdaPermission#principal}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken">EventSourceToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#event_source_token LambdaPermission#event_source_token}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType">FunctionUrlAuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#id LambdaPermission#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId">PrincipalOrgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal_org_id LambdaPermission#principal_org_id}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier">Qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#qualifier LambdaPermission#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount">SourceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_account LambdaPermission#source_account}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn">SourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_arn LambdaPermission#source_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId">StatementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id LambdaPermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix">StatementIdPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#action LambdaPermission#action}.

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_name LambdaPermission#function_name}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal LambdaPermission#principal}.

---

##### `EventSourceToken`<sup>Optional</sup> <a name="EventSourceToken" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken"></a>

```csharp
public string EventSourceToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#event_source_token LambdaPermission#event_source_token}.

---

##### `FunctionUrlAuthType`<sup>Optional</sup> <a name="FunctionUrlAuthType" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType"></a>

```csharp
public string FunctionUrlAuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#id LambdaPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalOrgId`<sup>Optional</sup> <a name="PrincipalOrgId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId"></a>

```csharp
public string PrincipalOrgId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal_org_id LambdaPermission#principal_org_id}.

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#qualifier LambdaPermission#qualifier}.

---

##### `SourceAccount`<sup>Optional</sup> <a name="SourceAccount" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount"></a>

```csharp
public string SourceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_account LambdaPermission#source_account}.

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_arn LambdaPermission#source_arn}.

---

##### `StatementId`<sup>Optional</sup> <a name="StatementId" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId"></a>

```csharp
public string StatementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id LambdaPermission#statement_id}.

---

##### `StatementIdPrefix`<sup>Optional</sup> <a name="StatementIdPrefix" id="@cdktf/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix"></a>

```csharp
public string StatementIdPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}.

---



