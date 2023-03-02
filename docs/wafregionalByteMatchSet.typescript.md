# `wafregionalByteMatchSet` Submodule <a name="`wafregionalByteMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalByteMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalByteMatchSet <a name="WafregionalByteMatchSet" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set aws_wafregional_byte_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

new wafregionalByteMatchSet.WafregionalByteMatchSet(scope: Construct, id: string, config: WafregionalByteMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig">WafregionalByteMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig">WafregionalByteMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.putByteMatchTuples">putByteMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetByteMatchTuples">resetByteMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putByteMatchTuples` <a name="putByteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.putByteMatchTuples"></a>

```typescript
public putByteMatchTuples(value: IResolvable | WafregionalByteMatchSetByteMatchTuples[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.putByteMatchTuples.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>[]

---

##### `resetByteMatchTuples` <a name="resetByteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetByteMatchTuples"></a>

```typescript
public resetByteMatchTuples(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isConstruct"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

wafregionalByteMatchSet.WafregionalByteMatchSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformElement"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformResource"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuples">byteMatchTuples</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList">WafregionalByteMatchSetByteMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuplesInput">byteMatchTuplesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `byteMatchTuples`<sup>Required</sup> <a name="byteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuples"></a>

```typescript
public readonly byteMatchTuples: WafregionalByteMatchSetByteMatchTuplesList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList">WafregionalByteMatchSetByteMatchTuplesList</a>

---

##### `byteMatchTuplesInput`<sup>Optional</sup> <a name="byteMatchTuplesInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuplesInput"></a>

```typescript
public readonly byteMatchTuplesInput: IResolvable | WafregionalByteMatchSetByteMatchTuples[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalByteMatchSetByteMatchTuples <a name="WafregionalByteMatchSetByteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.Initializer"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

const wafregionalByteMatchSetByteMatchTuples: wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.positionalConstraint">positionalConstraint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#positional_constraint WafregionalByteMatchSet#positional_constraint}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#text_transformation WafregionalByteMatchSet#text_transformation}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.targetString">targetString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#target_string WafregionalByteMatchSet#target_string}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#field_to_match WafregionalByteMatchSet#field_to_match}

---

##### `positionalConstraint`<sup>Required</sup> <a name="positionalConstraint" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.positionalConstraint"></a>

```typescript
public readonly positionalConstraint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#positional_constraint WafregionalByteMatchSet#positional_constraint}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#text_transformation WafregionalByteMatchSet#text_transformation}.

---

##### `targetString`<sup>Optional</sup> <a name="targetString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.targetString"></a>

```typescript
public readonly targetString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#target_string WafregionalByteMatchSet#target_string}.

---

### WafregionalByteMatchSetByteMatchTuplesFieldToMatch <a name="WafregionalByteMatchSetByteMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.Initializer"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

const wafregionalByteMatchSetByteMatchTuplesFieldToMatch: wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#type WafregionalByteMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#data WafregionalByteMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#type WafregionalByteMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#data WafregionalByteMatchSet#data}.

---

### WafregionalByteMatchSetConfig <a name="WafregionalByteMatchSetConfig" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.Initializer"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

const wafregionalByteMatchSetConfig: wafregionalByteMatchSet.WafregionalByteMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#name WafregionalByteMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.byteMatchTuples">byteMatchTuples</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>[]</code> | byte_match_tuples block. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#id WafregionalByteMatchSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#name WafregionalByteMatchSet#name}.

---

##### `byteMatchTuples`<sup>Optional</sup> <a name="byteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.byteMatchTuples"></a>

```typescript
public readonly byteMatchTuples: IResolvable | WafregionalByteMatchSetByteMatchTuples[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>[]

byte_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#id WafregionalByteMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference <a name="WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

new wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalByteMatchSetByteMatchTuplesFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

---


### WafregionalByteMatchSetByteMatchTuplesList <a name="WafregionalByteMatchSetByteMatchTuplesList" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

new wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.get"></a>

```typescript
public get(index: number): WafregionalByteMatchSetByteMatchTuplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalByteMatchSetByteMatchTuples[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>[]

---


### WafregionalByteMatchSetByteMatchTuplesOutputReference <a name="WafregionalByteMatchSetByteMatchTuplesOutputReference" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer"></a>

```typescript
import { wafregionalByteMatchSet } from '@cdktf/provider-aws'

new wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resetTargetString">resetTargetString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafregionalByteMatchSetByteMatchTuplesFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

---

##### `resetTargetString` <a name="resetTargetString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resetTargetString"></a>

```typescript
public resetTargetString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput">positionalConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput">targetStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint">positionalConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetString">targetString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafregionalByteMatchSetByteMatchTuplesFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

---

##### `positionalConstraintInput`<sup>Optional</sup> <a name="positionalConstraintInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput"></a>

```typescript
public readonly positionalConstraintInput: string;
```

- *Type:* string

---

##### `targetStringInput`<sup>Optional</sup> <a name="targetStringInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput"></a>

```typescript
public readonly targetStringInput: string;
```

- *Type:* string

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `positionalConstraint`<sup>Required</sup> <a name="positionalConstraint" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint"></a>

```typescript
public readonly positionalConstraint: string;
```

- *Type:* string

---

##### `targetString`<sup>Required</sup> <a name="targetString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetString"></a>

```typescript
public readonly targetString: string;
```

- *Type:* string

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalByteMatchSetByteMatchTuples | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a> | cdktf.IResolvable

---



