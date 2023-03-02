# `dataAwsRoute53ResolverFirewallRuleGroupAssociation` Submodule <a name="`dataAwsRoute53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallRuleGroupAssociation <a name="DataAwsRoute53ResolverFirewallRuleGroupAssociation" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ResolverFirewallRuleGroupAssociation(Construct Scope, string Id, DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig">DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig">DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ResolverFirewallRuleGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ResolverFirewallRuleGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ResolverFirewallRuleGroupAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId">CreatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName">ManagedOwnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime">ModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection">MutationProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationIdInput">FirewallRuleGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId">FirewallRuleGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId"></a>

```csharp
public string CreatorRequestId { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `ManagedOwnerName`<sup>Required</sup> <a name="ManagedOwnerName" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName"></a>

```csharp
public string ManagedOwnerName { get; }
```

- *Type:* string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime"></a>

```csharp
public string ModificationTime { get; }
```

- *Type:* string

---

##### `MutationProtection`<sup>Required</sup> <a name="MutationProtection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```csharp
public string MutationProtection { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupAssociationIdInput`<sup>Optional</sup> <a name="FirewallRuleGroupAssociationIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationIdInput"></a>

```csharp
public string FirewallRuleGroupAssociationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupAssociationId`<sup>Required</sup> <a name="FirewallRuleGroupAssociationId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId"></a>

```csharp
public string FirewallRuleGroupAssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig <a name="DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FirewallRuleGroupAssociationId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupAssociationId">FirewallRuleGroupAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FirewallRuleGroupAssociationId`<sup>Required</sup> <a name="FirewallRuleGroupAssociationId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupAssociationId"></a>

```csharp
public string FirewallRuleGroupAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



