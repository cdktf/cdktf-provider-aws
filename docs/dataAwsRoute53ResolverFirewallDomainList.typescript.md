# `dataAwsRoute53ResolverFirewallDomainList` Submodule <a name="`dataAwsRoute53ResolverFirewallDomainList` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallDomainList <a name="DataAwsRoute53ResolverFirewallDomainList" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverFirewallDomainList } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallDomainListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig">DataAwsRoute53ResolverFirewallDomainListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig">DataAwsRoute53ResolverFirewallDomainListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isConstruct"></a>

```typescript
import { dataAwsRoute53ResolverFirewallDomainList } from '@cdktf/provider-aws'

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformElement"></a>

```typescript
import { dataAwsRoute53ResolverFirewallDomainList } from '@cdktf/provider-aws'

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformDataSource"></a>

```typescript
import { dataAwsRoute53ResolverFirewallDomainList } from '@cdktf/provider-aws'

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creatorRequestId">creatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.domainCount">domainCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.managedOwnerName">managedOwnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.modificationTime">modificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListIdInput">firewallDomainListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creatorRequestId"></a>

```typescript
public readonly creatorRequestId: string;
```

- *Type:* string

---

##### `domainCount`<sup>Required</sup> <a name="domainCount" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.domainCount"></a>

```typescript
public readonly domainCount: number;
```

- *Type:* number

---

##### `managedOwnerName`<sup>Required</sup> <a name="managedOwnerName" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.managedOwnerName"></a>

```typescript
public readonly managedOwnerName: string;
```

- *Type:* string

---

##### `modificationTime`<sup>Required</sup> <a name="modificationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.modificationTime"></a>

```typescript
public readonly modificationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `firewallDomainListIdInput`<sup>Optional</sup> <a name="firewallDomainListIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListIdInput"></a>

```typescript
public readonly firewallDomainListIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallDomainListConfig <a name="DataAwsRoute53ResolverFirewallDomainListConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverFirewallDomainList } from '@cdktf/provider-aws'

const dataAwsRoute53ResolverFirewallDomainListConfig: dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



