# `route53ResolverFirewallRuleGroupAssociation` Submodule <a name="`route53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroupAssociation <a name="Route53ResolverFirewallRuleGroupAssociation" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53ResolverFirewallRuleGroupAssociation(Construct Scope, string Id, Route53ResolverFirewallRuleGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig">Route53ResolverFirewallRuleGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig">Route53ResolverFirewallRuleGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection">ResetMutationProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMutationProtection` <a name="ResetMutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection"></a>

```csharp
private void ResetMutationProtection()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53ResolverFirewallRuleGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53ResolverFirewallRuleGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53ResolverFirewallRuleGroupAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput">FirewallRuleGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput">MutationProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection">MutationProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupIdInput`<sup>Optional</sup> <a name="FirewallRuleGroupIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput"></a>

```csharp
public string FirewallRuleGroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MutationProtectionInput`<sup>Optional</sup> <a name="MutationProtectionInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput"></a>

```csharp
public string MutationProtectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MutationProtection`<sup>Required</sup> <a name="MutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```csharp
public string MutationProtection { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupAssociationConfig <a name="Route53ResolverFirewallRuleGroupAssociationConfig" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53ResolverFirewallRuleGroupAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FirewallRuleGroupId,
    string Name,
    double Priority,
    string VpcId,
    string Id = null,
    string MutationProtection = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection">MutationProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutationProtection`<sup>Optional</sup> <a name="MutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection"></a>

```csharp
public string MutationProtection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}.

---



