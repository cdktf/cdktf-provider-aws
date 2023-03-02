# `dataAwsAuditmanagerFramework` Submodule <a name="`dataAwsAuditmanagerFramework` Submodule" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAuditmanagerFramework <a name="DataAwsAuditmanagerFramework" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework aws_auditmanager_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

new dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework(scope: Construct, id: string, config: DataAwsAuditmanagerFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig">DataAwsAuditmanagerFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig">DataAwsAuditmanagerFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets">putControlSets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets">resetControlSets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putControlSets` <a name="putControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets"></a>

```typescript
public putControlSets(value: IResolvable | DataAwsAuditmanagerFrameworkControlSets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>[]

---

##### `resetControlSets` <a name="resetControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets"></a>

```typescript
public resetControlSets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType">complianceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets">controlSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput">controlSetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput">frameworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType">frameworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `complianceType`<sup>Required</sup> <a name="complianceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType"></a>

```typescript
public readonly complianceType: string;
```

- *Type:* string

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets"></a>

```typescript
public readonly controlSets: DataAwsAuditmanagerFrameworkControlSetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `controlSetsInput`<sup>Optional</sup> <a name="controlSetsInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput"></a>

```typescript
public readonly controlSetsInput: IResolvable | DataAwsAuditmanagerFrameworkControlSets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>[]

---

##### `frameworkTypeInput`<sup>Optional</sup> <a name="frameworkTypeInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput"></a>

```typescript
public readonly frameworkTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `frameworkType`<sup>Required</sup> <a name="frameworkType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType"></a>

```typescript
public readonly frameworkType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAuditmanagerFrameworkConfig <a name="DataAwsAuditmanagerFrameworkConfig" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

const dataAwsAuditmanagerFrameworkConfig: dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType">frameworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets">controlSets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>[]</code> | control_sets block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frameworkType`<sup>Required</sup> <a name="frameworkType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType"></a>

```typescript
public readonly frameworkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}.

---

##### `controlSets`<sup>Optional</sup> <a name="controlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets"></a>

```typescript
public readonly controlSets: IResolvable | DataAwsAuditmanagerFrameworkControlSets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>[]

control_sets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}

---

### DataAwsAuditmanagerFrameworkControlSets <a name="DataAwsAuditmanagerFrameworkControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

const dataAwsAuditmanagerFrameworkControlSets: dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls">controls</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>[]</code> | controls block. |

---

##### `controls`<sup>Optional</sup> <a name="controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls"></a>

```typescript
public readonly controls: IResolvable | DataAwsAuditmanagerFrameworkControlSetsControls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>[]

controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#controls DataAwsAuditmanagerFramework#controls}

---

### DataAwsAuditmanagerFrameworkControlSetsControls <a name="DataAwsAuditmanagerFrameworkControlSetsControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

const dataAwsAuditmanagerFrameworkControlSetsControls: dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAuditmanagerFrameworkControlSetsControlsList <a name="DataAwsAuditmanagerFrameworkControlSetsControlsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

new dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get"></a>

```typescript
public get(index: number): DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAuditmanagerFrameworkControlSetsControls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>[]

---


### DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

new dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAuditmanagerFrameworkControlSetsControls | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a> | cdktf.IResolvable

---


### DataAwsAuditmanagerFrameworkControlSetsList <a name="DataAwsAuditmanagerFrameworkControlSetsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

new dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get"></a>

```typescript
public get(index: number): DataAwsAuditmanagerFrameworkControlSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAuditmanagerFrameworkControlSets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>[]

---


### DataAwsAuditmanagerFrameworkControlSetsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsAuditmanagerFramework } from '@cdktf/provider-aws'

new dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls">putControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls">resetControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControls` <a name="putControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls"></a>

```typescript
public putControls(value: IResolvable | DataAwsAuditmanagerFrameworkControlSetsControls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>[]

---

##### `resetControls` <a name="resetControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls"></a>

```typescript
public resetControls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput">controlsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls"></a>

```typescript
public readonly controls: DataAwsAuditmanagerFrameworkControlSetsControlsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `controlsInput`<sup>Optional</sup> <a name="controlsInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput"></a>

```typescript
public readonly controlsInput: IResolvable | DataAwsAuditmanagerFrameworkControlSetsControls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAuditmanagerFrameworkControlSets | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a> | cdktf.IResolvable

---



