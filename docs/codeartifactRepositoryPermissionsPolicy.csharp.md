# `codeartifactRepositoryPermissionsPolicy` Submodule <a name="`codeartifactRepositoryPermissionsPolicy` Submodule" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepositoryPermissionsPolicy <a name="CodeartifactRepositoryPermissionsPolicy" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy aws_codeartifact_repository_permissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryPermissionsPolicy(Construct Scope, string Id, CodeartifactRepositoryPermissionsPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig">CodeartifactRepositoryPermissionsPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig">CodeartifactRepositoryPermissionsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner">ResetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision">ResetPolicyRevision</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDomainOwner` <a name="ResetDomainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner"></a>

```csharp
private void ResetDomainOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyRevision` <a name="ResetPolicyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision"></a>

```csharp
private void ResetPolicyRevision()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactRepositoryPermissionsPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactRepositoryPermissionsPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactRepositoryPermissionsPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput">DomainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput">PolicyRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner">DomainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision">PolicyRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `DomainOwnerInput`<sup>Optional</sup> <a name="DomainOwnerInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput"></a>

```csharp
public string DomainOwnerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `PolicyRevisionInput`<sup>Optional</sup> <a name="PolicyRevisionInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput"></a>

```csharp
public string PolicyRevisionInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner"></a>

```csharp
public string DomainOwner { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `PolicyRevision`<sup>Required</sup> <a name="PolicyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision"></a>

```csharp
public string PolicyRevision { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryPermissionsPolicyConfig <a name="CodeartifactRepositoryPermissionsPolicyConfig" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactRepositoryPermissionsPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain,
    string PolicyDocument,
    string Repository,
    string DomainOwner = null,
    string Id = null,
    string PolicyRevision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner">DomainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision">PolicyRevision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}.

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}.

---

##### `DomainOwner`<sup>Optional</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner"></a>

```csharp
public string DomainOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyRevision`<sup>Optional</sup> <a name="PolicyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision"></a>

```csharp
public string PolicyRevision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}.

---



