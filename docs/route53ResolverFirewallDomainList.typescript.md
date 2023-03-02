# `route53ResolverFirewallDomainList` Submodule <a name="`route53ResolverFirewallDomainList` Submodule" id="@cdktf/provider-aws.route53ResolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallDomainList <a name="Route53ResolverFirewallDomainList" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer"></a>

```typescript
import { route53ResolverFirewallDomainList } from '@cdktf/provider-aws'

new route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList(scope: Construct, id: string, config: Route53ResolverFirewallDomainListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig">Route53ResolverFirewallDomainListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig">Route53ResolverFirewallDomainListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isConstruct"></a>

```typescript
import { route53ResolverFirewallDomainList } from '@cdktf/provider-aws'

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformElement"></a>

```typescript
import { route53ResolverFirewallDomainList } from '@cdktf/provider-aws'

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformResource"></a>

```typescript
import { route53ResolverFirewallDomainList } from '@cdktf/provider-aws'

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallDomainListConfig <a name="Route53ResolverFirewallDomainListConfig" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.Initializer"></a>

```typescript
import { route53ResolverFirewallDomainList } from '@cdktf/provider-aws'

const route53ResolverFirewallDomainListConfig: route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#name Route53ResolverFirewallDomainList#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.domains">domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#domains Route53ResolverFirewallDomainList#domains}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#id Route53ResolverFirewallDomainList#id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#tags Route53ResolverFirewallDomainList#tags}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#tags_all Route53ResolverFirewallDomainList#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#name Route53ResolverFirewallDomainList#name}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#domains Route53ResolverFirewallDomainList#domains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#id Route53ResolverFirewallDomainList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#tags Route53ResolverFirewallDomainList#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list#tags_all Route53ResolverFirewallDomainList#tags_all}.

---



