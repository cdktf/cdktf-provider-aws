# `dataAwsRoute53ResolverFirewallRuleGroup` Submodule <a name="`dataAwsRoute53ResolverFirewallRuleGroup` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallRuleGroup <a name="DataAwsRoute53ResolverFirewallRuleGroup" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group aws_route53_resolver_firewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverFirewallRuleGroup } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig">DataAwsRoute53ResolverFirewallRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig">DataAwsRoute53ResolverFirewallRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isConstruct"></a>

```typescript
import { dataAwsRoute53ResolverFirewallRuleGroup } from '@cdktf/provider-aws'

dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformElement"></a>

```typescript
import { dataAwsRoute53ResolverFirewallRuleGroup } from '@cdktf/provider-aws'

dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsRoute53ResolverFirewallRuleGroup } from '@cdktf/provider-aws'

dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.creatorRequestId">creatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.modificationTime">modificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.ruleCount">ruleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.shareStatus">shareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.firewallRuleGroupIdInput">firewallRuleGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.creatorRequestId"></a>

```typescript
public readonly creatorRequestId: string;
```

- *Type:* string

---

##### `modificationTime`<sup>Required</sup> <a name="modificationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.modificationTime"></a>

```typescript
public readonly modificationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `ruleCount`<sup>Required</sup> <a name="ruleCount" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.ruleCount"></a>

```typescript
public readonly ruleCount: number;
```

- *Type:* number

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.shareStatus"></a>

```typescript
public readonly shareStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `firewallRuleGroupIdInput`<sup>Optional</sup> <a name="firewallRuleGroupIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.firewallRuleGroupIdInput"></a>

```typescript
public readonly firewallRuleGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.firewallRuleGroupId"></a>

```typescript
public readonly firewallRuleGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallRuleGroupConfig <a name="DataAwsRoute53ResolverFirewallRuleGroupConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverFirewallRuleGroup } from '@cdktf/provider-aws'

const dataAwsRoute53ResolverFirewallRuleGroupConfig: dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group#firewall_rule_group_id DataAwsRoute53ResolverFirewallRuleGroup#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group#id DataAwsRoute53ResolverFirewallRuleGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.firewallRuleGroupId"></a>

```typescript
public readonly firewallRuleGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group#firewall_rule_group_id DataAwsRoute53ResolverFirewallRuleGroup#firewall_rule_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroup.DataAwsRoute53ResolverFirewallRuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group#id DataAwsRoute53ResolverFirewallRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



