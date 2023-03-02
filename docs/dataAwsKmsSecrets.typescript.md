# `dataAwsKmsSecrets` Submodule <a name="`dataAwsKmsSecrets` Submodule" id="@cdktf/provider-aws.dataAwsKmsSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsSecrets <a name="DataAwsKmsSecrets" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets aws_kms_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

new dataAwsKmsSecrets.DataAwsKmsSecrets(scope: Construct, id: string, config: DataAwsKmsSecretsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig">DataAwsKmsSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig">DataAwsKmsSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.putSecret"></a>

```typescript
public putSecret(value: IResolvable | DataAwsKmsSecretsSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.putSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isConstruct"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

dataAwsKmsSecrets.DataAwsKmsSecrets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformElement"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformDataSource"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.plaintext">plaintext</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList">DataAwsKmsSecretsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secretInput">secretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.plaintext"></a>

```typescript
public readonly plaintext: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secret"></a>

```typescript
public readonly secret: DataAwsKmsSecretsSecretList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList">DataAwsKmsSecretsSecretList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | DataAwsKmsSecretsSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsSecretsConfig <a name="DataAwsKmsSecretsConfig" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.Initializer"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

const dataAwsKmsSecretsConfig: dataAwsKmsSecrets.DataAwsKmsSecretsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.secret">secret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#id DataAwsKmsSecrets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.secret"></a>

```typescript
public readonly secret: IResolvable | DataAwsKmsSecretsSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#secret DataAwsKmsSecrets#secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#id DataAwsKmsSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsKmsSecretsSecret <a name="DataAwsKmsSecretsSecret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.Initializer"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

const dataAwsKmsSecretsSecret: dataAwsKmsSecrets.DataAwsKmsSecretsSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#name DataAwsKmsSecrets#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#payload DataAwsKmsSecrets#payload}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#context DataAwsKmsSecrets#context}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#encryption_algorithm DataAwsKmsSecrets#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#grant_tokens DataAwsKmsSecrets#grant_tokens}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#key_id DataAwsKmsSecrets#key_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#name DataAwsKmsSecrets#name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#payload DataAwsKmsSecrets#payload}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#context DataAwsKmsSecrets#context}.

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#encryption_algorithm DataAwsKmsSecrets#encryption_algorithm}.

---

##### `grantTokens`<sup>Optional</sup> <a name="grantTokens" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#grant_tokens DataAwsKmsSecrets#grant_tokens}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#key_id DataAwsKmsSecrets#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsKmsSecretsSecretList <a name="DataAwsKmsSecretsSecretList" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

new dataAwsKmsSecrets.DataAwsKmsSecretsSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.get"></a>

```typescript
public get(index: number): DataAwsKmsSecretsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsKmsSecretsSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>[]

---


### DataAwsKmsSecretsSecretOutputReference <a name="DataAwsKmsSecretsSecretOutputReference" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer"></a>

```typescript
import { dataAwsKmsSecrets } from '@cdktf/provider-aws'

new dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetGrantTokens">resetGrantTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContext` <a name="resetContext" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetGrantTokens` <a name="resetGrantTokens" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetGrantTokens"></a>

```typescript
public resetGrantTokens(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.contextInput">contextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokensInput">grantTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.contextInput"></a>

```typescript
public readonly contextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `grantTokensInput`<sup>Optional</sup> <a name="grantTokensInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokensInput"></a>

```typescript
public readonly grantTokensInput: string[];
```

- *Type:* string[]

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `grantTokens`<sup>Required</sup> <a name="grantTokens" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsKmsSecretsSecret | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a> | cdktf.IResolvable

---



