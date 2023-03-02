# `dataAwsIamPolicyDocument` Submodule <a name="`dataAwsIamPolicyDocument` Submodule" id="@cdktf/provider-aws.dataAwsIamPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamPolicyDocument <a name="DataAwsIamPolicyDocument" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document aws_iam_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocument(Construct Scope, string Id, DataAwsIamPolicyDocumentConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig">DataAwsIamPolicyDocumentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig">DataAwsIamPolicyDocumentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement">PutStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideJson">ResetOverrideJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverridePolicyDocuments">ResetOverridePolicyDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourceJson">ResetSourceJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourcePolicyDocuments">ResetSourcePolicyDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetStatement">ResetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutStatement` <a name="PutStatement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement"></a>

```csharp
private void PutStatement(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverrideJson` <a name="ResetOverrideJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideJson"></a>

```csharp
private void ResetOverrideJson()
```

##### `ResetOverridePolicyDocuments` <a name="ResetOverridePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverridePolicyDocuments"></a>

```csharp
private void ResetOverridePolicyDocuments()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetSourceJson` <a name="ResetSourceJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourceJson"></a>

```csharp
private void ResetSourceJson()
```

##### `ResetSourcePolicyDocuments` <a name="ResetSourcePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourcePolicyDocuments"></a>

```csharp
private void ResetSourcePolicyDocuments()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetStatement"></a>

```csharp
private void ResetStatement()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIamPolicyDocument.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIamPolicyDocument.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIamPolicyDocument.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statement">Statement</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList">DataAwsIamPolicyDocumentStatementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJsonInput">OverrideJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocumentsInput">OverridePolicyDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJsonInput">SourceJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocumentsInput">SourcePolicyDocumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statementInput">StatementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJson">OverrideJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocuments">OverridePolicyDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJson">SourceJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocuments">SourcePolicyDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statement"></a>

```csharp
public DataAwsIamPolicyDocumentStatementList Statement { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList">DataAwsIamPolicyDocumentStatementList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OverrideJsonInput`<sup>Optional</sup> <a name="OverrideJsonInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJsonInput"></a>

```csharp
public string OverrideJsonInput { get; }
```

- *Type:* string

---

##### `OverridePolicyDocumentsInput`<sup>Optional</sup> <a name="OverridePolicyDocumentsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocumentsInput"></a>

```csharp
public string[] OverridePolicyDocumentsInput { get; }
```

- *Type:* string[]

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `SourceJsonInput`<sup>Optional</sup> <a name="SourceJsonInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJsonInput"></a>

```csharp
public string SourceJsonInput { get; }
```

- *Type:* string

---

##### `SourcePolicyDocumentsInput`<sup>Optional</sup> <a name="SourcePolicyDocumentsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocumentsInput"></a>

```csharp
public string[] SourcePolicyDocumentsInput { get; }
```

- *Type:* string[]

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statementInput"></a>

```csharp
public object StatementInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OverrideJson`<sup>Required</sup> <a name="OverrideJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJson"></a>

```csharp
public string OverrideJson { get; }
```

- *Type:* string

---

##### `OverridePolicyDocuments`<sup>Required</sup> <a name="OverridePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocuments"></a>

```csharp
public string[] OverridePolicyDocuments { get; }
```

- *Type:* string[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `SourceJson`<sup>Required</sup> <a name="SourceJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJson"></a>

```csharp
public string SourceJson { get; }
```

- *Type:* string

---

##### `SourcePolicyDocuments`<sup>Required</sup> <a name="SourcePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocuments"></a>

```csharp
public string[] SourcePolicyDocuments { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamPolicyDocumentConfig <a name="DataAwsIamPolicyDocumentConfig" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string OverrideJson = null,
    string[] OverridePolicyDocuments = null,
    string PolicyId = null,
    string SourceJson = null,
    string[] SourcePolicyDocuments = null,
    object Statement = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overrideJson">OverrideJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overridePolicyDocuments">OverridePolicyDocuments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourceJson">SourceJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourcePolicyDocuments">SourcePolicyDocuments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.statement">Statement</a></code> | <code>object</code> | statement block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverrideJson`<sup>Optional</sup> <a name="OverrideJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overrideJson"></a>

```csharp
public string OverrideJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}.

---

##### `OverridePolicyDocuments`<sup>Optional</sup> <a name="OverridePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overridePolicyDocuments"></a>

```csharp
public string[] OverridePolicyDocuments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}.

---

##### `SourceJson`<sup>Optional</sup> <a name="SourceJson" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourceJson"></a>

```csharp
public string SourceJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}.

---

##### `SourcePolicyDocuments`<sup>Optional</sup> <a name="SourcePolicyDocuments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourcePolicyDocuments"></a>

```csharp
public string[] SourcePolicyDocuments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}.

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.statement"></a>

```csharp
public object Statement { get; set; }
```

- *Type:* object

statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#statement DataAwsIamPolicyDocument#statement}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}.

---

### DataAwsIamPolicyDocumentStatement <a name="DataAwsIamPolicyDocumentStatement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatement {
    string[] Actions = null,
    object Condition = null,
    string Effect = null,
    string[] NotActions = null,
    object NotPrincipals = null,
    string[] NotResources = null,
    object Principals = null,
    string[] Resources = null,
    string Sid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#actions DataAwsIamPolicyDocument#actions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.condition">Condition</a></code> | <code>object</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.effect">Effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#effect DataAwsIamPolicyDocument#effect}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notActions">NotActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notPrincipals">NotPrincipals</a></code> | <code>object</code> | not_principals block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notResources">NotResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.principals">Principals</a></code> | <code>object</code> | principals block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#resources DataAwsIamPolicyDocument#resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.sid">Sid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#sid DataAwsIamPolicyDocument#sid}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#actions DataAwsIamPolicyDocument#actions}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.condition"></a>

```csharp
public object Condition { get; set; }
```

- *Type:* object

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#condition DataAwsIamPolicyDocument#condition}

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#effect DataAwsIamPolicyDocument#effect}.

---

##### `NotActions`<sup>Optional</sup> <a name="NotActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notActions"></a>

```csharp
public string[] NotActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}.

---

##### `NotPrincipals`<sup>Optional</sup> <a name="NotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notPrincipals"></a>

```csharp
public object NotPrincipals { get; set; }
```

- *Type:* object

not_principals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_principals DataAwsIamPolicyDocument#not_principals}

---

##### `NotResources`<sup>Optional</sup> <a name="NotResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notResources"></a>

```csharp
public string[] NotResources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}.

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.principals"></a>

```csharp
public object Principals { get; set; }
```

- *Type:* object

principals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#principals DataAwsIamPolicyDocument#principals}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#resources DataAwsIamPolicyDocument#resources}.

---

##### `Sid`<sup>Optional</sup> <a name="Sid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.sid"></a>

```csharp
public string Sid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#sid DataAwsIamPolicyDocument#sid}.

---

### DataAwsIamPolicyDocumentStatementCondition <a name="DataAwsIamPolicyDocumentStatementCondition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementCondition {
    string Test,
    string[] Values,
    string Variable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.test">Test</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#test DataAwsIamPolicyDocument#test}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#values DataAwsIamPolicyDocument#values}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.variable">Variable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#variable DataAwsIamPolicyDocument#variable}. |

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.test"></a>

```csharp
public string Test { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#test DataAwsIamPolicyDocument#test}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#values DataAwsIamPolicyDocument#values}.

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#variable DataAwsIamPolicyDocument#variable}.

---

### DataAwsIamPolicyDocumentStatementNotPrincipals <a name="DataAwsIamPolicyDocumentStatementNotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementNotPrincipals {
    string[] Identifiers,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.identifiers">Identifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}. |

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}.

---

### DataAwsIamPolicyDocumentStatementPrincipals <a name="DataAwsIamPolicyDocumentStatementPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementPrincipals {
    string[] Identifiers,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.identifiers">Identifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}. |

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamPolicyDocumentStatementConditionList <a name="DataAwsIamPolicyDocumentStatementConditionList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get"></a>

```csharp
private DataAwsIamPolicyDocumentStatementConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsIamPolicyDocumentStatementConditionOutputReference <a name="DataAwsIamPolicyDocumentStatementConditionOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.testInput">TestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.test">Test</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TestInput`<sup>Optional</sup> <a name="TestInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.testInput"></a>

```csharp
public string TestInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.test"></a>

```csharp
public string Test { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsIamPolicyDocumentStatementList <a name="DataAwsIamPolicyDocumentStatementList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get"></a>

```csharp
private DataAwsIamPolicyDocumentStatementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsIamPolicyDocumentStatementNotPrincipalsList <a name="DataAwsIamPolicyDocumentStatementNotPrincipalsList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementNotPrincipalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get"></a>

```csharp
private DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference <a name="DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsIamPolicyDocumentStatementOutputReference <a name="DataAwsIamPolicyDocumentStatementOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals">PutNotPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals">PutPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotActions">ResetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotPrincipals">ResetNotPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotResources">ResetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetSid">ResetSid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition"></a>

```csharp
private void PutCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition.parameter.value"></a>

- *Type:* object

---

##### `PutNotPrincipals` <a name="PutNotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals"></a>

```csharp
private void PutNotPrincipals(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals.parameter.value"></a>

- *Type:* object

---

##### `PutPrincipals` <a name="PutPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals"></a>

```csharp
private void PutPrincipals(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals.parameter.value"></a>

- *Type:* object

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetEffect` <a name="ResetEffect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetEffect"></a>

```csharp
private void ResetEffect()
```

##### `ResetNotActions` <a name="ResetNotActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotActions"></a>

```csharp
private void ResetNotActions()
```

##### `ResetNotPrincipals` <a name="ResetNotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotPrincipals"></a>

```csharp
private void ResetNotPrincipals()
```

##### `ResetNotResources` <a name="ResetNotResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotResources"></a>

```csharp
private void ResetNotResources()
```

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetSid` <a name="ResetSid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetSid"></a>

```csharp
private void ResetSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList">DataAwsIamPolicyDocumentStatementConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipals">NotPrincipals</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList">DataAwsIamPolicyDocumentStatementNotPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principals">Principals</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList">DataAwsIamPolicyDocumentStatementPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActionsInput">NotActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipalsInput">NotPrincipalsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResourcesInput">NotResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sidInput">SidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActions">NotActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResources">NotResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sid">Sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.condition"></a>

```csharp
public DataAwsIamPolicyDocumentStatementConditionList Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList">DataAwsIamPolicyDocumentStatementConditionList</a>

---

##### `NotPrincipals`<sup>Required</sup> <a name="NotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipals"></a>

```csharp
public DataAwsIamPolicyDocumentStatementNotPrincipalsList NotPrincipals { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList">DataAwsIamPolicyDocumentStatementNotPrincipalsList</a>

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principals"></a>

```csharp
public DataAwsIamPolicyDocumentStatementPrincipalsList Principals { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList">DataAwsIamPolicyDocumentStatementPrincipalsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `NotActionsInput`<sup>Optional</sup> <a name="NotActionsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActionsInput"></a>

```csharp
public string[] NotActionsInput { get; }
```

- *Type:* string[]

---

##### `NotPrincipalsInput`<sup>Optional</sup> <a name="NotPrincipalsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipalsInput"></a>

```csharp
public object NotPrincipalsInput { get; }
```

- *Type:* object

---

##### `NotResourcesInput`<sup>Optional</sup> <a name="NotResourcesInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResourcesInput"></a>

```csharp
public string[] NotResourcesInput { get; }
```

- *Type:* string[]

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principalsInput"></a>

```csharp
public object PrincipalsInput { get; }
```

- *Type:* object

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `SidInput`<sup>Optional</sup> <a name="SidInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sidInput"></a>

```csharp
public string SidInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActions"></a>

```csharp
public string[] NotActions { get; }
```

- *Type:* string[]

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResources"></a>

```csharp
public string[] NotResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsIamPolicyDocumentStatementPrincipalsList <a name="DataAwsIamPolicyDocumentStatementPrincipalsList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementPrincipalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get"></a>

```csharp
private DataAwsIamPolicyDocumentStatementPrincipalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsIamPolicyDocumentStatementPrincipalsOutputReference <a name="DataAwsIamPolicyDocumentStatementPrincipalsOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIamPolicyDocumentStatementPrincipalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



