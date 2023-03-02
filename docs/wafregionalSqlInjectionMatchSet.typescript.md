# `wafregionalSqlInjectionMatchSet` Submodule <a name="`wafregionalSqlInjectionMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalSqlInjectionMatchSet <a name="WafregionalSqlInjectionMatchSet" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set aws_wafregional_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

new wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet(scope: Construct, id: string, config: WafregionalSqlInjectionMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig">WafregionalSqlInjectionMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig">WafregionalSqlInjectionMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple">putSqlInjectionMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetSqlInjectionMatchTuple">resetSqlInjectionMatchTuple</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSqlInjectionMatchTuple` <a name="putSqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple"></a>

```typescript
public putSqlInjectionMatchTuple(value: IResolvable | WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSqlInjectionMatchTuple` <a name="resetSqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetSqlInjectionMatchTuple"></a>

```typescript
public resetSqlInjectionMatchTuple(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTuple">sqlInjectionMatchTuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTupleInput">sqlInjectionMatchTupleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sqlInjectionMatchTuple`<sup>Required</sup> <a name="sqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTuple"></a>

```typescript
public readonly sqlInjectionMatchTuple: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sqlInjectionMatchTupleInput`<sup>Optional</sup> <a name="sqlInjectionMatchTupleInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTupleInput"></a>

```typescript
public readonly sqlInjectionMatchTupleInput: IResolvable | WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalSqlInjectionMatchSetConfig <a name="WafregionalSqlInjectionMatchSetConfig" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.Initializer"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

const wafregionalSqlInjectionMatchSetConfig: wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuple">sqlInjectionMatchTuple</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]</code> | sql_injection_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlInjectionMatchTuple`<sup>Optional</sup> <a name="sqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuple"></a>

```typescript
public readonly sqlInjectionMatchTuple: IResolvable | WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

sql_injection_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}

---

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.Initializer"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

const wafregionalSqlInjectionMatchSetSqlInjectionMatchTuple: wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}.

---

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.Initializer"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

const wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch: wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

new wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---


### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

new wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get"></a>

```typescript
public get(index: number): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

---


### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer"></a>

```typescript
import { wafregionalSqlInjectionMatchSet } from '@cdktf/provider-aws'

new wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a> | cdktf.IResolvable

---



