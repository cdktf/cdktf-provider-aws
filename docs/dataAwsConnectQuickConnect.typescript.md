# `dataAwsConnectQuickConnect` Submodule <a name="`dataAwsConnectQuickConnect` Submodule" id="@cdktf/provider-aws.dataAwsConnectQuickConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectQuickConnect <a name="DataAwsConnectQuickConnect" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect aws_connect_quick_connect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnect(scope: Construct, id: string, config: DataAwsConnectQuickConnectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig">DataAwsConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig">DataAwsConnectQuickConnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetQuickConnectId">resetQuickConnectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetName"></a>

```typescript
public resetName(): void
```

##### `resetQuickConnectId` <a name="resetQuickConnectId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetQuickConnectId"></a>

```typescript
public resetQuickConnectId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isConstruct"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformElement"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformDataSource"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList">DataAwsConnectQuickConnectQuickConnectConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.quickConnectIdInput">quickConnectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.quickConnectId">quickConnectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.quickConnectConfig"></a>

```typescript
public readonly quickConnectConfig: DataAwsConnectQuickConnectQuickConnectConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList">DataAwsConnectQuickConnectQuickConnectConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quickConnectIdInput`<sup>Optional</sup> <a name="quickConnectIdInput" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.quickConnectIdInput"></a>

```typescript
public readonly quickConnectIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quickConnectId`<sup>Required</sup> <a name="quickConnectId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.quickConnectId"></a>

```typescript
public readonly quickConnectId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnect.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectQuickConnectConfig <a name="DataAwsConnectQuickConnectConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

const dataAwsConnectQuickConnectConfig: dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#instance_id DataAwsConnectQuickConnect#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#id DataAwsConnectQuickConnect#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#name DataAwsConnectQuickConnect#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.quickConnectId">quickConnectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#quick_connect_id DataAwsConnectQuickConnect#quick_connect_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#tags DataAwsConnectQuickConnect#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#instance_id DataAwsConnectQuickConnect#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#id DataAwsConnectQuickConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#name DataAwsConnectQuickConnect#name}.

---

##### `quickConnectId`<sup>Optional</sup> <a name="quickConnectId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.quickConnectId"></a>

```typescript
public readonly quickConnectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#quick_connect_id DataAwsConnectQuickConnect#quick_connect_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#tags DataAwsConnectQuickConnect#tags}.

---

### DataAwsConnectQuickConnectQuickConnectConfig <a name="DataAwsConnectQuickConnectQuickConnectConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfig.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

const dataAwsConnectQuickConnectQuickConnectConfig: dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfig = { ... }
```


### DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig <a name="DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

const dataAwsConnectQuickConnectQuickConnectConfigPhoneConfig: dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig = { ... }
```


### DataAwsConnectQuickConnectQuickConnectConfigQueueConfig <a name="DataAwsConnectQuickConnectQuickConnectConfigQueueConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfig.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

const dataAwsConnectQuickConnectQuickConnectConfigQueueConfig: dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfig = { ... }
```


### DataAwsConnectQuickConnectQuickConnectConfigUserConfig <a name="DataAwsConnectQuickConnectQuickConnectConfigUserConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfig.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

const dataAwsConnectQuickConnectQuickConnectConfigUserConfig: dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectQuickConnectQuickConnectConfigList <a name="DataAwsConnectQuickConnectQuickConnectConfigList" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.get"></a>

```typescript
public get(index: number): DataAwsConnectQuickConnectQuickConnectConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectQuickConnectQuickConnectConfigOutputReference <a name="DataAwsConnectQuickConnectQuickConnectConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList">DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig">queueConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList">DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType">quickConnectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig">userConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList">DataAwsConnectQuickConnectQuickConnectConfigUserConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfig">DataAwsConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList">DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList</a>

---

##### `queueConfig`<sup>Required</sup> <a name="queueConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig"></a>

```typescript
public readonly queueConfig: DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList">DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList</a>

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType"></a>

```typescript
public readonly quickConnectType: string;
```

- *Type:* string

---

##### `userConfig`<sup>Required</sup> <a name="userConfig" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig"></a>

```typescript
public readonly userConfig: DataAwsConnectQuickConnectQuickConnectConfigUserConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList">DataAwsConnectQuickConnectQuickConnectConfigUserConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectQuickConnectQuickConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfig">DataAwsConnectQuickConnectQuickConnectConfig</a>

---


### DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList <a name="DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.get"></a>

```typescript
public get(index: number): DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference <a name="DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig">DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig">DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig</a>

---


### DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList <a name="DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.get"></a>

```typescript
public get(index: number): DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference <a name="DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfig">DataAwsConnectQuickConnectQuickConnectConfigQueueConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectQuickConnectQuickConnectConfigQueueConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigQueueConfig">DataAwsConnectQuickConnectQuickConnectConfigQueueConfig</a>

---


### DataAwsConnectQuickConnectQuickConnectConfigUserConfigList <a name="DataAwsConnectQuickConnectQuickConnectConfigUserConfigList" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.get"></a>

```typescript
public get(index: number): DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference <a name="DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectQuickConnect } from '@cdktf/provider-aws'

new dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfig">DataAwsConnectQuickConnectQuickConnectConfigUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectQuickConnectQuickConnectConfigUserConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectQuickConnect.DataAwsConnectQuickConnectQuickConnectConfigUserConfig">DataAwsConnectQuickConnectQuickConnectConfigUserConfig</a>

---



