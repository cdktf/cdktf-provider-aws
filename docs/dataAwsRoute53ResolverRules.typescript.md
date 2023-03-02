# `dataAwsRoute53ResolverRules` Submodule <a name="`dataAwsRoute53ResolverRules` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverRules <a name="DataAwsRoute53ResolverRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules aws_route53_resolver_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverRules } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules(scope: Construct, id: string, config?: DataAwsRoute53ResolverRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig">DataAwsRoute53ResolverRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig">DataAwsRoute53ResolverRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId">resetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId">resetResolverEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType">resetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus">resetShareStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId"></a>

```typescript
public resetOwnerId(): void
```

##### `resetResolverEndpointId` <a name="resetResolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId"></a>

```typescript
public resetResolverEndpointId(): void
```

##### `resetRuleType` <a name="resetRuleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType"></a>

```typescript
public resetRuleType(): void
```

##### `resetShareStatus` <a name="resetShareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus"></a>

```typescript
public resetShareStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct"></a>

```typescript
import { dataAwsRoute53ResolverRules } from '@cdktf/provider-aws'

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement"></a>

```typescript
import { dataAwsRoute53ResolverRules } from '@cdktf/provider-aws'

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource"></a>

```typescript
import { dataAwsRoute53ResolverRules } from '@cdktf/provider-aws'

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds">resolverRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput">ownerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput">resolverEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput">shareStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId">resolverEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus">shareStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `resolverRuleIds`<sup>Required</sup> <a name="resolverRuleIds" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds"></a>

```typescript
public readonly resolverRuleIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput"></a>

```typescript
public readonly ownerIdInput: string;
```

- *Type:* string

---

##### `resolverEndpointIdInput`<sup>Optional</sup> <a name="resolverEndpointIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput"></a>

```typescript
public readonly resolverEndpointIdInput: string;
```

- *Type:* string

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `shareStatusInput`<sup>Optional</sup> <a name="shareStatusInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput"></a>

```typescript
public readonly shareStatusInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `resolverEndpointId`<sup>Required</sup> <a name="resolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId"></a>

```typescript
public readonly resolverEndpointId: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus"></a>

```typescript
public readonly shareStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverRulesConfig <a name="DataAwsRoute53ResolverRulesConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverRules } from '@cdktf/provider-aws'

const dataAwsRoute53ResolverRulesConfig: dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex">nameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId">ownerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId">resolverEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType">ruleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus">shareStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}.

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="resolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId"></a>

```typescript
public readonly resolverEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}.

---

##### `shareStatus`<sup>Optional</sup> <a name="shareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus"></a>

```typescript
public readonly shareStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}.

---



