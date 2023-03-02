# `wafregionalXssMatchSet` Submodule <a name="`wafregionalXssMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalXssMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalXssMatchSet <a name="WafregionalXssMatchSet" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set aws_wafregional_xss_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

new wafregionalXssMatchSet.WafregionalXssMatchSet(scope: Construct, id: string, config: WafregionalXssMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig">WafregionalXssMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig">WafregionalXssMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.putXssMatchTuple">putXssMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetXssMatchTuple">resetXssMatchTuple</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putXssMatchTuple` <a name="putXssMatchTuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.putXssMatchTuple"></a>

```typescript
public putXssMatchTuple(value: IResolvable | WafregionalXssMatchSetXssMatchTuple[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.putXssMatchTuple.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetXssMatchTuple` <a name="resetXssMatchTuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.resetXssMatchTuple"></a>

```typescript
public resetXssMatchTuple(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isConstruct"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

wafregionalXssMatchSet.WafregionalXssMatchSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformElement"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformResource"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTuple">xssMatchTuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList">WafregionalXssMatchSetXssMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTupleInput">xssMatchTupleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `xssMatchTuple`<sup>Required</sup> <a name="xssMatchTuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTuple"></a>

```typescript
public readonly xssMatchTuple: WafregionalXssMatchSetXssMatchTupleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList">WafregionalXssMatchSetXssMatchTupleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `xssMatchTupleInput`<sup>Optional</sup> <a name="xssMatchTupleInput" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.xssMatchTupleInput"></a>

```typescript
public readonly xssMatchTupleInput: IResolvable | WafregionalXssMatchSetXssMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalXssMatchSetConfig <a name="WafregionalXssMatchSetConfig" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.Initializer"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

const wafregionalXssMatchSetConfig: wafregionalXssMatchSet.WafregionalXssMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#name WafregionalXssMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#id WafregionalXssMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.xssMatchTuple">xssMatchTuple</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>[]</code> | xss_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#name WafregionalXssMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#id WafregionalXssMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xssMatchTuple`<sup>Optional</sup> <a name="xssMatchTuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetConfig.property.xssMatchTuple"></a>

```typescript
public readonly xssMatchTuple: IResolvable | WafregionalXssMatchSetXssMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>[]

xss_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}

---

### WafregionalXssMatchSetXssMatchTuple <a name="WafregionalXssMatchSetXssMatchTuple" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.Initializer"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

const wafregionalXssMatchSetXssMatchTuple: wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#text_transformation WafregionalXssMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#field_to_match WafregionalXssMatchSet#field_to_match}

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#text_transformation WafregionalXssMatchSet#text_transformation}.

---

### WafregionalXssMatchSetXssMatchTupleFieldToMatch <a name="WafregionalXssMatchSetXssMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.Initializer"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

const wafregionalXssMatchSetXssMatchTupleFieldToMatch: wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#type WafregionalXssMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#data WafregionalXssMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#type WafregionalXssMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set#data WafregionalXssMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference <a name="WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

new wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalXssMatchSetXssMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a>

---


### WafregionalXssMatchSetXssMatchTupleList <a name="WafregionalXssMatchSetXssMatchTupleList" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

new wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.get"></a>

```typescript
public get(index: number): WafregionalXssMatchSetXssMatchTupleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalXssMatchSetXssMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a>[]

---


### WafregionalXssMatchSetXssMatchTupleOutputReference <a name="WafregionalXssMatchSetXssMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer"></a>

```typescript
import { wafregionalXssMatchSet } from '@cdktf/provider-aws'

new wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafregionalXssMatchSetXssMatchTupleFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference">WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference">WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafregionalXssMatchSetXssMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleFieldToMatch">WafregionalXssMatchSetXssMatchTupleFieldToMatch</a>

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTupleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalXssMatchSetXssMatchTuple | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalXssMatchSet.WafregionalXssMatchSetXssMatchTuple">WafregionalXssMatchSetXssMatchTuple</a> | cdktf.IResolvable

---



