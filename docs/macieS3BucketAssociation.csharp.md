# `macieS3BucketAssociation` Submodule <a name="`macieS3BucketAssociation` Submodule" id="@cdktf/provider-aws.macieS3BucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieS3BucketAssociation <a name="MacieS3BucketAssociation" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association aws_macie_s3_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MacieS3BucketAssociation(Construct Scope, string Id, MacieS3BucketAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig">MacieS3BucketAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig">MacieS3BucketAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType">PutClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType">ResetClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId">ResetMemberAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutClassificationType` <a name="PutClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType"></a>

```csharp
private void PutClassificationType(MacieS3BucketAssociationClassificationType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `ResetClassificationType` <a name="ResetClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType"></a>

```csharp
private void ResetClassificationType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemberAccountId` <a name="ResetMemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId"></a>

```csharp
private void ResetMemberAccountId()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MacieS3BucketAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MacieS3BucketAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MacieS3BucketAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType">ClassificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput">ClassificationTypeInput</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput">MemberAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId">MemberAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClassificationType`<sup>Required</sup> <a name="ClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType"></a>

```csharp
public MacieS3BucketAssociationClassificationTypeOutputReference ClassificationType { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ClassificationTypeInput`<sup>Optional</sup> <a name="ClassificationTypeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput"></a>

```csharp
public MacieS3BucketAssociationClassificationType ClassificationTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberAccountIdInput`<sup>Optional</sup> <a name="MemberAccountIdInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput"></a>

```csharp
public string MemberAccountIdInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemberAccountId`<sup>Required</sup> <a name="MemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId"></a>

```csharp
public string MemberAccountId { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MacieS3BucketAssociationClassificationType <a name="MacieS3BucketAssociationClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MacieS3BucketAssociationClassificationType {
    string Continuous = null,
    string OneTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous">Continuous</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime">OneTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}. |

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous"></a>

```csharp
public string Continuous { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}.

---

##### `OneTime`<sup>Optional</sup> <a name="OneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime"></a>

```csharp
public string OneTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}.

---

### MacieS3BucketAssociationConfig <a name="MacieS3BucketAssociationConfig" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MacieS3BucketAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BucketName,
    MacieS3BucketAssociationClassificationType ClassificationType = null,
    string Id = null,
    string MemberAccountId = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType">ClassificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | classification_type block. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId">MemberAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}.

---

##### `ClassificationType`<sup>Optional</sup> <a name="ClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType"></a>

```csharp
public MacieS3BucketAssociationClassificationType ClassificationType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

classification_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#classification_type MacieS3BucketAssociation#classification_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberAccountId`<sup>Optional</sup> <a name="MemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId"></a>

```csharp
public string MemberAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### MacieS3BucketAssociationClassificationTypeOutputReference <a name="MacieS3BucketAssociationClassificationTypeOutputReference" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MacieS3BucketAssociationClassificationTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime">ResetOneTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetOneTime` <a name="ResetOneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime"></a>

```csharp
private void ResetOneTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput">OneTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous">Continuous</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime">OneTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput"></a>

```csharp
public string ContinuousInput { get; }
```

- *Type:* string

---

##### `OneTimeInput`<sup>Optional</sup> <a name="OneTimeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput"></a>

```csharp
public string OneTimeInput { get; }
```

- *Type:* string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous"></a>

```csharp
public string Continuous { get; }
```

- *Type:* string

---

##### `OneTime`<sup>Required</sup> <a name="OneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime"></a>

```csharp
public string OneTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue"></a>

```csharp
public MacieS3BucketAssociationClassificationType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---



