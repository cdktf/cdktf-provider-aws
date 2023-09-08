# `aws_codegurureviewer_repository_association`

Refer to the Terraform Registory for docs: [`aws_codegurureviewer_repository_association`](https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association).

# `codegurureviewerRepositoryAssociation` Submodule <a name="`codegurureviewerRepositoryAssociation` Submodule" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodegurureviewerRepositoryAssociation <a name="CodegurureviewerRepositoryAssociation" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association aws_codegurureviewer_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociation(Construct Scope, string Id, CodegurureviewerRepositoryAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig">CodegurureviewerRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig">CodegurureviewerRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails">PutKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository">PutRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails">ResetKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutKmsKeyDetails` <a name="PutKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails"></a>

```csharp
private void PutKmsKeyDetails(CodegurureviewerRepositoryAssociationKmsKeyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---

##### `PutRepository` <a name="PutRepository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository"></a>

```csharp
private void PutRepository(CodegurureviewerRepositoryAssociationRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(CodegurureviewerRepositoryAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyDetails` <a name="ResetKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails"></a>

```csharp
private void ResetKmsKeyDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodegurureviewerRepositoryAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodegurureviewerRepositoryAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodegurureviewerRepositoryAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails">KmsKeyDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails">S3RepositoryDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput">KmsKeyDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput">RepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `KmsKeyDetails`<sup>Required</sup> <a name="KmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails"></a>

```csharp
public CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference KmsKeyDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryOutputReference Repository { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a>

---

##### `S3RepositoryDetails`<sup>Required</sup> <a name="S3RepositoryDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails"></a>

```csharp
public CodegurureviewerRepositoryAssociationS3RepositoryDetailsList S3RepositoryDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts"></a>

```csharp
public CodegurureviewerRepositoryAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyDetailsInput`<sup>Optional</sup> <a name="KmsKeyDetailsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput"></a>

```csharp
public CodegurureviewerRepositoryAssociationKmsKeyDetails KmsKeyDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepository RepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodegurureviewerRepositoryAssociationConfig <a name="CodegurureviewerRepositoryAssociationConfig" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CodegurureviewerRepositoryAssociationRepository Repository,
    string Id = null,
    CodegurureviewerRepositoryAssociationKmsKeyDetails KmsKeyDetails = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    CodegurureviewerRepositoryAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | repository block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails">KmsKeyDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | kms_key_details block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepository Repository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#repository CodegurureviewerRepositoryAssociation#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyDetails`<sup>Optional</sup> <a name="KmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails"></a>

```csharp
public CodegurureviewerRepositoryAssociationKmsKeyDetails KmsKeyDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

kms_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#kms_key_details CodegurureviewerRepositoryAssociation#kms_key_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts"></a>

```csharp
public CodegurureviewerRepositoryAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#timeouts CodegurureviewerRepositoryAssociation#timeouts}

---

### CodegurureviewerRepositoryAssociationKmsKeyDetails <a name="CodegurureviewerRepositoryAssociationKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationKmsKeyDetails {
    string EncryptionOption = null,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption">EncryptionOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}. |

---

##### `EncryptionOption`<sup>Optional</sup> <a name="EncryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption"></a>

```csharp
public string EncryptionOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}.

---

### CodegurureviewerRepositoryAssociationRepository <a name="CodegurureviewerRepositoryAssociationRepository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepository {
    CodegurureviewerRepositoryAssociationRepositoryBitbucket Bitbucket = null,
    CodegurureviewerRepositoryAssociationRepositoryCodecommit Codecommit = null,
    CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer GithubEnterpriseServer = null,
    CodegurureviewerRepositoryAssociationRepositoryS3Bucket S3Bucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | bitbucket block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit">Codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | codecommit block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer">GithubEnterpriseServer</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | github_enterprise_server block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | s3_bucket block. |

---

##### `Bitbucket`<sup>Optional</sup> <a name="Bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryBitbucket Bitbucket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

bitbucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#bitbucket CodegurureviewerRepositoryAssociation#bitbucket}

---

##### `Codecommit`<sup>Optional</sup> <a name="Codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryCodecommit Codecommit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

codecommit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#codecommit CodegurureviewerRepositoryAssociation#codecommit}

---

##### `GithubEnterpriseServer`<sup>Optional</sup> <a name="GithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer GithubEnterpriseServer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

github_enterprise_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#github_enterprise_server CodegurureviewerRepositoryAssociation#github_enterprise_server}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryS3Bucket S3Bucket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#s3_bucket CodegurureviewerRepositoryAssociation#s3_bucket}

---

### CodegurureviewerRepositoryAssociationRepositoryBitbucket <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryBitbucket {
    string ConnectionArn,
    string Name,
    string Owner
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryCodecommit <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryCodecommit {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer {
    string ConnectionArn,
    string Name,
    string Owner
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryS3Bucket <a name="CodegurureviewerRepositoryAssociationRepositoryS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryS3Bucket {
    string BucketName,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationS3RepositoryDetails <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationS3RepositoryDetails {

};
```


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts {

};
```


### CodegurureviewerRepositoryAssociationTimeouts <a name="CodegurureviewerRepositoryAssociationTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption">ResetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionOption` <a name="ResetEncryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption"></a>

```csharp
private void ResetEncryptionOption()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput">EncryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionOptionInput`<sup>Optional</sup> <a name="EncryptionOptionInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput"></a>

```csharp
public string EncryptionOptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption"></a>

```csharp
public string EncryptionOption { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationKmsKeyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---


### CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput">ConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput"></a>

```csharp
public string ConnectionArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryBitbucket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---


### CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryCodecommit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---


### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput">ConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput"></a>

```csharp
public string ConnectionArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---


### CodegurureviewerRepositoryAssociationRepositoryOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket">PutBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit">PutCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer">PutGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket">PutS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket">ResetBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit">ResetCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer">ResetGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBitbucket` <a name="PutBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket"></a>

```csharp
private void PutBitbucket(CodegurureviewerRepositoryAssociationRepositoryBitbucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---

##### `PutCodecommit` <a name="PutCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit"></a>

```csharp
private void PutCodecommit(CodegurureviewerRepositoryAssociationRepositoryCodecommit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---

##### `PutGithubEnterpriseServer` <a name="PutGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer"></a>

```csharp
private void PutGithubEnterpriseServer(CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---

##### `PutS3Bucket` <a name="PutS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket"></a>

```csharp
private void PutS3Bucket(CodegurureviewerRepositoryAssociationRepositoryS3Bucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---

##### `ResetBitbucket` <a name="ResetBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket"></a>

```csharp
private void ResetBitbucket()
```

##### `ResetCodecommit` <a name="ResetCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit"></a>

```csharp
private void ResetCodecommit()
```

##### `ResetGithubEnterpriseServer` <a name="ResetGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer"></a>

```csharp
private void ResetGithubEnterpriseServer()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit">Codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer">GithubEnterpriseServer</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput">BitbucketInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput">CodecommitInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput">GithubEnterpriseServerInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bitbucket`<sup>Required</sup> <a name="Bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference Bitbucket { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a>

---

##### `Codecommit`<sup>Required</sup> <a name="Codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference Codecommit { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a>

---

##### `GithubEnterpriseServer`<sup>Required</sup> <a name="GithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference GithubEnterpriseServer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a>

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference S3Bucket { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a>

---

##### `BitbucketInput`<sup>Optional</sup> <a name="BitbucketInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryBitbucket BitbucketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---

##### `CodecommitInput`<sup>Optional</sup> <a name="CodecommitInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryCodecommit CodecommitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---

##### `GithubEnterpriseServerInput`<sup>Optional</sup> <a name="GithubEnterpriseServerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer GithubEnterpriseServerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryS3Bucket S3BucketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---


### CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationRepositoryS3Bucket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get"></a>

```csharp
private CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey">BuildArtifactsObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey">SourceCodeArtifactsObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildArtifactsObjectKey`<sup>Required</sup> <a name="BuildArtifactsObjectKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey"></a>

```csharp
public string BuildArtifactsObjectKey { get; }
```

- *Type:* string

---

##### `SourceCodeArtifactsObjectKey`<sup>Required</sup> <a name="SourceCodeArtifactsObjectKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey"></a>

```csharp
public string SourceCodeArtifactsObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationS3RepositoryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get"></a>

```csharp
private CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts">CodeArtifacts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CodeArtifacts`<sup>Required</sup> <a name="CodeArtifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts"></a>

```csharp
public CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList CodeArtifacts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue"></a>

```csharp
public CodegurureviewerRepositoryAssociationS3RepositoryDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a>

---


### CodegurureviewerRepositoryAssociationTimeoutsOutputReference <a name="CodegurureviewerRepositoryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodegurureviewerRepositoryAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



