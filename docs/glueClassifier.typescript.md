# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktf/provider-aws.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier aws_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

new glueClassifier.GlueClassifier(scope: Construct, id: string, config: GlueClassifierConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier">putCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier">putGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier">putJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier">putXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier">resetCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier">resetGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier">resetJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier">resetXmlClassifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCsvClassifier` <a name="putCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```typescript
public putCsvClassifier(value: GlueClassifierCsvClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `putGrokClassifier` <a name="putGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```typescript
public putGrokClassifier(value: GlueClassifierGrokClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `putJsonClassifier` <a name="putJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```typescript
public putJsonClassifier(value: GlueClassifierJsonClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `putXmlClassifier` <a name="putXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```typescript
public putXmlClassifier(value: GlueClassifierXmlClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `resetCsvClassifier` <a name="resetCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```typescript
public resetCsvClassifier(): void
```

##### `resetGrokClassifier` <a name="resetGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```typescript
public resetGrokClassifier(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJsonClassifier` <a name="resetJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```typescript
public resetJsonClassifier(): void
```

##### `resetXmlClassifier` <a name="resetXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```typescript
public resetXmlClassifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

glueClassifier.GlueClassifier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

glueClassifier.GlueClassifier.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

glueClassifier.GlueClassifier.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier">csvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier">grokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier">jsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier">xmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput">csvClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput">grokClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput">jsonClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput">xmlClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `csvClassifier`<sup>Required</sup> <a name="csvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```typescript
public readonly csvClassifier: GlueClassifierCsvClassifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `grokClassifier`<sup>Required</sup> <a name="grokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```typescript
public readonly grokClassifier: GlueClassifierGrokClassifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `jsonClassifier`<sup>Required</sup> <a name="jsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```typescript
public readonly jsonClassifier: GlueClassifierJsonClassifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `xmlClassifier`<sup>Required</sup> <a name="xmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```typescript
public readonly xmlClassifier: GlueClassifierXmlClassifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `csvClassifierInput`<sup>Optional</sup> <a name="csvClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```typescript
public readonly csvClassifierInput: GlueClassifierCsvClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `grokClassifierInput`<sup>Optional</sup> <a name="grokClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```typescript
public readonly grokClassifierInput: GlueClassifierGrokClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jsonClassifierInput`<sup>Optional</sup> <a name="jsonClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```typescript
public readonly jsonClassifierInput: GlueClassifierJsonClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `xmlClassifierInput`<sup>Optional</sup> <a name="xmlClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```typescript
public readonly xmlClassifierInput: GlueClassifierXmlClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

const glueClassifierConfig: glueClassifier.GlueClassifierConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier">csvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | csv_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier">grokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | grok_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier">jsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | json_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier">xmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | xml_classifier block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}.

---

##### `csvClassifier`<sup>Optional</sup> <a name="csvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```typescript
public readonly csvClassifier: GlueClassifierCsvClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

csv_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grokClassifier`<sup>Optional</sup> <a name="grokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```typescript
public readonly grokClassifier: GlueClassifierGrokClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

grok_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jsonClassifier`<sup>Optional</sup> <a name="jsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```typescript
public readonly jsonClassifier: GlueClassifierJsonClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

json_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xmlClassifier`<sup>Optional</sup> <a name="xmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```typescript
public readonly xmlClassifier: GlueClassifierXmlClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

xml_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

const glueClassifierCsvClassifier: glueClassifier.GlueClassifierCsvClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">allowSingleColumn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">containsHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">customDatatypeConfigured</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes">customDatatypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">disableValueTrimming</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header">header</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">quoteSymbol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}. |

---

##### `allowSingleColumn`<sup>Optional</sup> <a name="allowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```typescript
public readonly allowSingleColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}.

---

##### `containsHeader`<sup>Optional</sup> <a name="containsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```typescript
public readonly containsHeader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}.

---

##### `customDatatypeConfigured`<sup>Optional</sup> <a name="customDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```typescript
public readonly customDatatypeConfigured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}.

---

##### `customDatatypes`<sup>Optional</sup> <a name="customDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes"></a>

```typescript
public readonly customDatatypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}.

---

##### `disableValueTrimming`<sup>Optional</sup> <a name="disableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```typescript
public readonly disableValueTrimming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```typescript
public readonly header: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}.

---

##### `quoteSymbol`<sup>Optional</sup> <a name="quoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```typescript
public readonly quoteSymbol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}.

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

const glueClassifierGrokClassifier: glueClassifier.GlueClassifierGrokClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification">classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">grokPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">customPatterns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}. |

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `grokPattern`<sup>Required</sup> <a name="grokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```typescript
public readonly grokPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}.

---

##### `customPatterns`<sup>Optional</sup> <a name="customPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```typescript
public readonly customPatterns: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}.

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

const glueClassifierJsonClassifier: glueClassifier.GlueClassifierJsonClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">jsonPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}.

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

const glueClassifierXmlClassifier: glueClassifier.GlueClassifierXmlClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification">classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">rowTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}. |

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `rowTag`<sup>Required</sup> <a name="rowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```typescript
public readonly rowTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

new glueClassifier.GlueClassifierCsvClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">resetAllowSingleColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">resetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">resetCustomDatatypeConfigured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes">resetCustomDatatypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">resetDisableValueTrimming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">resetQuoteSymbol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowSingleColumn` <a name="resetAllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```typescript
public resetAllowSingleColumn(): void
```

##### `resetContainsHeader` <a name="resetContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```typescript
public resetContainsHeader(): void
```

##### `resetCustomDatatypeConfigured` <a name="resetCustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```typescript
public resetCustomDatatypeConfigured(): void
```

##### `resetCustomDatatypes` <a name="resetCustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes"></a>

```typescript
public resetCustomDatatypes(): void
```

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetDisableValueTrimming` <a name="resetDisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```typescript
public resetDisableValueTrimming(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetQuoteSymbol` <a name="resetQuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```typescript
public resetQuoteSymbol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">allowSingleColumnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">containsHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">customDatatypeConfiguredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput">customDatatypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">disableValueTrimmingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">headerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">quoteSymbolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">allowSingleColumn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">containsHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">customDatatypeConfigured</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes">customDatatypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">disableValueTrimming</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">header</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">quoteSymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowSingleColumnInput`<sup>Optional</sup> <a name="allowSingleColumnInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```typescript
public readonly allowSingleColumnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containsHeaderInput`<sup>Optional</sup> <a name="containsHeaderInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```typescript
public readonly containsHeaderInput: string;
```

- *Type:* string

---

##### `customDatatypeConfiguredInput`<sup>Optional</sup> <a name="customDatatypeConfiguredInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```typescript
public readonly customDatatypeConfiguredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customDatatypesInput`<sup>Optional</sup> <a name="customDatatypesInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput"></a>

```typescript
public readonly customDatatypesInput: string[];
```

- *Type:* string[]

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `disableValueTrimmingInput`<sup>Optional</sup> <a name="disableValueTrimmingInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```typescript
public readonly disableValueTrimmingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string[];
```

- *Type:* string[]

---

##### `quoteSymbolInput`<sup>Optional</sup> <a name="quoteSymbolInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```typescript
public readonly quoteSymbolInput: string;
```

- *Type:* string

---

##### `allowSingleColumn`<sup>Required</sup> <a name="allowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```typescript
public readonly allowSingleColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containsHeader`<sup>Required</sup> <a name="containsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```typescript
public readonly containsHeader: string;
```

- *Type:* string

---

##### `customDatatypeConfigured`<sup>Required</sup> <a name="customDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```typescript
public readonly customDatatypeConfigured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customDatatypes`<sup>Required</sup> <a name="customDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes"></a>

```typescript
public readonly customDatatypes: string[];
```

- *Type:* string[]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `disableValueTrimming`<sup>Required</sup> <a name="disableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```typescript
public readonly disableValueTrimming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```typescript
public readonly header: string[];
```

- *Type:* string[]

---

##### `quoteSymbol`<sup>Required</sup> <a name="quoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```typescript
public readonly quoteSymbol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueClassifierCsvClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

new glueClassifier.GlueClassifierGrokClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">resetCustomPatterns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomPatterns` <a name="resetCustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```typescript
public resetCustomPatterns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">classificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">customPatternsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">grokPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">customPatterns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">grokPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```typescript
public readonly classificationInput: string;
```

- *Type:* string

---

##### `customPatternsInput`<sup>Optional</sup> <a name="customPatternsInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```typescript
public readonly customPatternsInput: string;
```

- *Type:* string

---

##### `grokPatternInput`<sup>Optional</sup> <a name="grokPatternInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```typescript
public readonly grokPatternInput: string;
```

- *Type:* string

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `customPatterns`<sup>Required</sup> <a name="customPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```typescript
public readonly customPatterns: string;
```

- *Type:* string

---

##### `grokPattern`<sup>Required</sup> <a name="grokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```typescript
public readonly grokPattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueClassifierGrokClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

new glueClassifier.GlueClassifierJsonClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">jsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```typescript
public readonly jsonPathInput: string;
```

- *Type:* string

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueClassifierJsonClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktf/provider-aws'

new glueClassifier.GlueClassifierXmlClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">classificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">rowTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">rowTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```typescript
public readonly classificationInput: string;
```

- *Type:* string

---

##### `rowTagInput`<sup>Optional</sup> <a name="rowTagInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```typescript
public readonly rowTagInput: string;
```

- *Type:* string

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `rowTag`<sup>Required</sup> <a name="rowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```typescript
public readonly rowTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueClassifierXmlClassifier;
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---



