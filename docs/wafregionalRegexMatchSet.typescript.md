# `wafregionalRegexMatchSet` Submodule <a name="`wafregionalRegexMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalRegexMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRegexMatchSet <a name="WafregionalRegexMatchSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set aws_wafregional_regex_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

new wafregionalRegexMatchSet.WafregionalRegexMatchSet(scope: Construct, id: string, config: WafregionalRegexMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig">WafregionalRegexMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig">WafregionalRegexMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple">putRegexMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple">resetRegexMatchTuple</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRegexMatchTuple` <a name="putRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple"></a>

```typescript
public putRegexMatchTuple(value: IResolvable | WafregionalRegexMatchSetRegexMatchTuple[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegexMatchTuple` <a name="resetRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple"></a>

```typescript
public resetRegexMatchTuple(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple">regexMatchTuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput">regexMatchTupleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `regexMatchTuple`<sup>Required</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple"></a>

```typescript
public readonly regexMatchTuple: WafregionalRegexMatchSetRegexMatchTupleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexMatchTupleInput`<sup>Optional</sup> <a name="regexMatchTupleInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput"></a>

```typescript
public readonly regexMatchTupleInput: IResolvable | WafregionalRegexMatchSetRegexMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRegexMatchSetConfig <a name="WafregionalRegexMatchSetConfig" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.Initializer"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

const wafregionalRegexMatchSetConfig: wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple">regexMatchTuple</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>[]</code> | regex_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regexMatchTuple`<sup>Optional</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple"></a>

```typescript
public readonly regexMatchTuple: IResolvable | WafregionalRegexMatchSetRegexMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>[]

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}

---

### WafregionalRegexMatchSetRegexMatchTuple <a name="WafregionalRegexMatchSetRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.Initializer"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

const wafregionalRegexMatchSetRegexMatchTuple: wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId">regexPatternSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#field_to_match WafregionalRegexMatchSet#field_to_match}

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId"></a>

```typescript
public readonly regexPatternSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}.

---

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatch <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.Initializer"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

const wafregionalRegexMatchSetRegexMatchTupleFieldToMatch: wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

new wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


### WafregionalRegexMatchSetRegexMatchTupleList <a name="WafregionalRegexMatchSetRegexMatchTupleList" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

new wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get"></a>

```typescript
public get(index: number): WafregionalRegexMatchSetRegexMatchTupleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalRegexMatchSetRegexMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>[]

---


### WafregionalRegexMatchSetRegexMatchTupleOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer"></a>

```typescript
import { wafregionalRegexMatchSet } from '@cdktf/provider-aws'

new wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput">regexPatternSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId">regexPatternSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---

##### `regexPatternSetIdInput`<sup>Optional</sup> <a name="regexPatternSetIdInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput"></a>

```typescript
public readonly regexPatternSetIdInput: string;
```

- *Type:* string

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId"></a>

```typescript
public readonly regexPatternSetId: string;
```

- *Type:* string

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalRegexMatchSetRegexMatchTuple | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a> | cdktf.IResolvable

---



