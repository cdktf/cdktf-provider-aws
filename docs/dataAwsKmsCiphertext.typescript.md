# `dataAwsKmsCiphertext` Submodule <a name="`dataAwsKmsCiphertext` Submodule" id="@cdktf/provider-aws.dataAwsKmsCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsCiphertext <a name="DataAwsKmsCiphertext" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext aws_kms_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.Initializer"></a>

```typescript
import { dataAwsKmsCiphertext } from '@cdktf/provider-aws'

new dataAwsKmsCiphertext.DataAwsKmsCiphertext(scope: Construct, id: string, config: DataAwsKmsCiphertextConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig">DataAwsKmsCiphertextConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig">DataAwsKmsCiphertextConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContext` <a name="resetContext" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isConstruct"></a>

```typescript
import { dataAwsKmsCiphertext } from '@cdktf/provider-aws'

dataAwsKmsCiphertext.DataAwsKmsCiphertext.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformElement"></a>

```typescript
import { dataAwsKmsCiphertext } from '@cdktf/provider-aws'

dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformDataSource"></a>

```typescript
import { dataAwsKmsCiphertext } from '@cdktf/provider-aws'

dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.ciphertextBlob">ciphertextBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.contextInput">contextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.plaintextInput">plaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ciphertextBlob`<sup>Required</sup> <a name="ciphertextBlob" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.ciphertextBlob"></a>

```typescript
public readonly ciphertextBlob: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.contextInput"></a>

```typescript
public readonly contextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.plaintextInput"></a>

```typescript
public readonly plaintextInput: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertext.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsCiphertextConfig <a name="DataAwsKmsCiphertextConfig" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.Initializer"></a>

```typescript
import { dataAwsKmsCiphertext } from '@cdktf/provider-aws'

const dataAwsKmsCiphertextConfig: dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#key_id DataAwsKmsCiphertext#key_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.plaintext">plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#plaintext DataAwsKmsCiphertext#plaintext}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#context DataAwsKmsCiphertext#context}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#id DataAwsKmsCiphertext#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#key_id DataAwsKmsCiphertext#key_id}.

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#plaintext DataAwsKmsCiphertext#plaintext}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#context DataAwsKmsCiphertext#context}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsCiphertext.DataAwsKmsCiphertextConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext#id DataAwsKmsCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



