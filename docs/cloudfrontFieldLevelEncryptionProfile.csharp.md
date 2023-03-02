# `cloudfrontFieldLevelEncryptionProfile` Submodule <a name="`cloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionProfile <a name="CloudfrontFieldLevelEncryptionProfile" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile aws_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfile(Construct Scope, string Id, CloudfrontFieldLevelEncryptionProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities">PutEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEncryptionEntities` <a name="PutEncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities"></a>

```csharp
private void PutEncryptionEntities(CloudfrontFieldLevelEncryptionProfileEncryptionEntities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontFieldLevelEncryptionProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontFieldLevelEncryptionProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontFieldLevelEncryptionProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.callerReference">CallerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntities">EncryptionEntities</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntitiesInput">EncryptionEntitiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.callerReference"></a>

```csharp
public string CallerReference { get; }
```

- *Type:* string

---

##### `EncryptionEntities`<sup>Required</sup> <a name="EncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntities"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference EncryptionEntities { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EncryptionEntitiesInput`<sup>Optional</sup> <a name="EncryptionEntitiesInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntitiesInput"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntities EncryptionEntitiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CloudfrontFieldLevelEncryptionProfileEncryptionEntities EncryptionEntities,
    string Name,
    string Comment = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.encryptionEntities">EncryptionEntities</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | encryption_entities block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EncryptionEntities`<sup>Required</sup> <a name="EncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.encryptionEntities"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntities EncryptionEntities { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

encryption_entities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntities <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileEncryptionEntities {
    object Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems {
    CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns FieldPatterns,
    string ProviderId,
    string PublicKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.fieldPatterns">FieldPatterns</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | field_patterns block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.providerId">ProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.publicKeyId">PublicKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}. |

---

##### `FieldPatterns`<sup>Required</sup> <a name="FieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.fieldPatterns"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns FieldPatterns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

field_patterns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.providerId"></a>

```csharp
public string ProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}.

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.publicKeyId"></a>

```csharp
public string PublicKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}.

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns {
    string[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.property.items">Items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.property.items"></a>

```csharp
public string[] Items { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.itemsInput"></a>

```csharp
public string[] ItemsInput { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.internalValue"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get"></a>

```csharp
private CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns">PutFieldPatterns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldPatterns` <a name="PutFieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns"></a>

```csharp
private void PutFieldPatterns(CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatterns">FieldPatterns</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatternsInput">FieldPatternsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerIdInput">ProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyIdInput">PublicKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyId">PublicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldPatterns`<sup>Required</sup> <a name="FieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatterns"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference FieldPatterns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference</a>

---

##### `FieldPatternsInput`<sup>Optional</sup> <a name="FieldPatternsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatternsInput"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns FieldPatternsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerIdInput"></a>

```csharp
public string ProviderIdInput { get; }
```

- *Type:* string

---

##### `PublicKeyIdInput`<sup>Optional</sup> <a name="PublicKeyIdInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyIdInput"></a>

```csharp
public string PublicKeyIdInput { get; }
```

- *Type:* string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyId"></a>

```csharp
public string PublicKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems.parameter.value"></a>

- *Type:* object

---

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.items"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.internalValue"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileEncryptionEntities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---



