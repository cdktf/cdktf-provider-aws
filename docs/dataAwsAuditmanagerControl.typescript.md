# `dataAwsAuditmanagerControl` Submodule <a name="`dataAwsAuditmanagerControl` Submodule" id="@cdktf/provider-aws.dataAwsAuditmanagerControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAuditmanagerControl <a name="DataAwsAuditmanagerControl" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control aws_auditmanager_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

new dataAwsAuditmanagerControl.DataAwsAuditmanagerControl(scope: Construct, id: string, config: DataAwsAuditmanagerControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig">DataAwsAuditmanagerControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig">DataAwsAuditmanagerControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources">putControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetControlMappingSources">resetControlMappingSources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putControlMappingSources` <a name="putControlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources"></a>

```typescript
public putControlMappingSources(value: IResolvable | DataAwsAuditmanagerControlControlMappingSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>[]

---

##### `resetControlMappingSources` <a name="resetControlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetControlMappingSources"></a>

```typescript
public resetControlMappingSources(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanInstructions">actionPlanInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanTitle">actionPlanTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSources">controlMappingSources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList">DataAwsAuditmanagerControlControlMappingSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.testingInformation">testingInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSourcesInput">controlMappingSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actionPlanInstructions`<sup>Required</sup> <a name="actionPlanInstructions" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanInstructions"></a>

```typescript
public readonly actionPlanInstructions: string;
```

- *Type:* string

---

##### `actionPlanTitle`<sup>Required</sup> <a name="actionPlanTitle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanTitle"></a>

```typescript
public readonly actionPlanTitle: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `controlMappingSources`<sup>Required</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSources"></a>

```typescript
public readonly controlMappingSources: DataAwsAuditmanagerControlControlMappingSourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList">DataAwsAuditmanagerControlControlMappingSourcesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `testingInformation`<sup>Required</sup> <a name="testingInformation" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.testingInformation"></a>

```typescript
public readonly testingInformation: string;
```

- *Type:* string

---

##### `controlMappingSourcesInput`<sup>Optional</sup> <a name="controlMappingSourcesInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSourcesInput"></a>

```typescript
public readonly controlMappingSourcesInput: IResolvable | DataAwsAuditmanagerControlControlMappingSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAuditmanagerControlConfig <a name="DataAwsAuditmanagerControlConfig" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

const dataAwsAuditmanagerControlConfig: dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.controlMappingSources">controlMappingSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>[]</code> | control_mapping_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}.

---

##### `controlMappingSources`<sup>Optional</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.controlMappingSources"></a>

```typescript
public readonly controlMappingSources: IResolvable | DataAwsAuditmanagerControlControlMappingSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>[]

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#control_mapping_sources DataAwsAuditmanagerControl#control_mapping_sources}

---

### DataAwsAuditmanagerControlControlMappingSources <a name="DataAwsAuditmanagerControlControlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

const dataAwsAuditmanagerControlControlMappingSources: dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.property.sourceKeyword">sourceKeyword</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | source_keyword block. |

---

##### `sourceKeyword`<sup>Optional</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.property.sourceKeyword"></a>

```typescript
public readonly sourceKeyword: IResolvable | DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

source_keyword block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#source_keyword DataAwsAuditmanagerControl#source_keyword}

---

### DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

const dataAwsAuditmanagerControlControlMappingSourcesSourceKeyword: dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAuditmanagerControlControlMappingSourcesList <a name="DataAwsAuditmanagerControlControlMappingSourcesList" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

new dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get"></a>

```typescript
public get(index: number): DataAwsAuditmanagerControlControlMappingSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAuditmanagerControlControlMappingSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>[]

---


### DataAwsAuditmanagerControlControlMappingSourcesOutputReference <a name="DataAwsAuditmanagerControlControlMappingSourcesOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

new dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword">putSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword">resetSourceKeyword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceKeyword` <a name="putSourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword"></a>

```typescript
public putSourceKeyword(value: IResolvable | DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---

##### `resetSourceKeyword` <a name="resetSourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword"></a>

```typescript
public resetSourceKeyword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription">sourceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency">sourceFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword">sourceKeyword</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList">DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption">sourceSetUpOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText">troubleshootingText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput">sourceKeywordInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceDescription`<sup>Required</sup> <a name="sourceDescription" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription"></a>

```typescript
public readonly sourceDescription: string;
```

- *Type:* string

---

##### `sourceFrequency`<sup>Required</sup> <a name="sourceFrequency" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency"></a>

```typescript
public readonly sourceFrequency: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `sourceKeyword`<sup>Required</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword"></a>

```typescript
public readonly sourceKeyword: DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList">DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceSetUpOption`<sup>Required</sup> <a name="sourceSetUpOption" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption"></a>

```typescript
public readonly sourceSetUpOption: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `troubleshootingText`<sup>Required</sup> <a name="troubleshootingText" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText"></a>

```typescript
public readonly troubleshootingText: string;
```

- *Type:* string

---

##### `sourceKeywordInput`<sup>Optional</sup> <a name="sourceKeywordInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput"></a>

```typescript
public readonly sourceKeywordInput: IResolvable | DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAuditmanagerControlControlMappingSources | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a> | cdktf.IResolvable

---


### DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

new dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get"></a>

```typescript
public get(index: number): DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---


### DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer"></a>

```typescript
import { dataAwsAuditmanagerControl } from '@cdktf/provider-aws'

new dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType">keywordInputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue">keywordValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keywordInputType`<sup>Required</sup> <a name="keywordInputType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType"></a>

```typescript
public readonly keywordInputType: string;
```

- *Type:* string

---

##### `keywordValue`<sup>Required</sup> <a name="keywordValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue"></a>

```typescript
public readonly keywordValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a> | cdktf.IResolvable

---



