# `dataAwsOutpostsOutpostInstanceTypes` Submodule <a name="`dataAwsOutpostsOutpostInstanceTypes` Submodule" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOutpostsOutpostInstanceTypes <a name="DataAwsOutpostsOutpostInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types aws_outposts_outpost_instance_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceTypes } from '@cdktf/provider-aws'

new dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig">DataAwsOutpostsOutpostInstanceTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig">DataAwsOutpostsOutpostInstanceTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isConstruct"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceTypes } from '@cdktf/provider-aws'

dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformElement"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceTypes } from '@cdktf/provider-aws'

dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformDataSource"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceTypes } from '@cdktf/provider-aws'

dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOutpostsOutpostInstanceTypesConfig <a name="DataAwsOutpostsOutpostInstanceTypesConfig" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.Initializer"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceTypes } from '@cdktf/provider-aws'

const dataAwsOutpostsOutpostInstanceTypesConfig: dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types#arn DataAwsOutpostsOutpostInstanceTypes#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types#id DataAwsOutpostsOutpostInstanceTypes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types#arn DataAwsOutpostsOutpostInstanceTypes#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceTypes.DataAwsOutpostsOutpostInstanceTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types#id DataAwsOutpostsOutpostInstanceTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



