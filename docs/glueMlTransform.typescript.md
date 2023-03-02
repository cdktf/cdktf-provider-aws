# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktf/provider-aws.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform aws_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

new glueMlTransform.GlueMlTransform(scope: Construct, id: string, config: GlueMlTransformConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables">putInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInputRecordTables` <a name="putInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```typescript
public putInputRecordTables(value: IResolvable | GlueMlTransformInputRecordTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>[]

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters"></a>

```typescript
public putParameters(value: GlueMlTransformParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```typescript
public resetGlueVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```typescript
public resetNumberOfWorkers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```typescript
public resetWorkerType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

glueMlTransform.GlueMlTransform.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

glueMlTransform.GlueMlTransform.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

glueMlTransform.GlueMlTransform.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount">labelCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput">glueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">inputRecordTablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput">workerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion">glueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```typescript
public readonly inputRecordTables: GlueMlTransformInputRecordTablesList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a>

---

##### `labelCount`<sup>Required</sup> <a name="labelCount" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount"></a>

```typescript
public readonly labelCount: number;
```

- *Type:* number

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters"></a>

```typescript
public readonly parameters: GlueMlTransformParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema"></a>

```typescript
public readonly schema: GlueMlTransformSchemaList;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```typescript
public readonly glueVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputRecordTablesInput`<sup>Optional</sup> <a name="inputRecordTablesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```typescript
public readonly inputRecordTablesInput: IResolvable | GlueMlTransformInputRecordTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>[]

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```typescript
public readonly numberOfWorkersInput: number;
```

- *Type:* number

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput"></a>

```typescript
public readonly parametersInput: GlueMlTransformParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```typescript
public readonly workerTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

const glueMlTransformConfig: glueMlTransform.GlueMlTransformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">inputRecordTables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>[]</code> | input_record_tables block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion">glueVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType">workerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```typescript
public readonly inputRecordTables: IResolvable | GlueMlTransformInputRecordTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>[]

input_record_tables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters"></a>

```typescript
public readonly parameters: GlueMlTransformParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#parameters GlueMlTransform#parameters}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}.

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}.

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}.

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

const glueMlTransformInputRecordTables: glueMlTransform.GlueMlTransformInputRecordTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}.

---

### GlueMlTransformParameters <a name="GlueMlTransformParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

const glueMlTransformParameters: glueMlTransform.GlueMlTransformParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | find_matches_parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType">transformType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}. |

---

##### `findMatchesParameters`<sup>Required</sup> <a name="findMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters"></a>

```typescript
public readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

find_matches_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType"></a>

```typescript
public readonly transformType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}.

---

### GlueMlTransformParametersFindMatchesParameters <a name="GlueMlTransformParametersFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

const glueMlTransformParametersFindMatchesParameters: glueMlTransform.GlueMlTransformParametersFindMatchesParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff">accuracyCostTradeOff</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff">precisionRecallTradeOff</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}. |

---

##### `accuracyCostTradeOff`<sup>Optional</sup> <a name="accuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff"></a>

```typescript
public readonly accuracyCostTradeOff: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}.

---

##### `enforceProvidedLabels`<sup>Optional</sup> <a name="enforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```typescript
public readonly enforceProvidedLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}.

---

##### `precisionRecallTradeOff`<sup>Optional</sup> <a name="precisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff"></a>

```typescript
public readonly precisionRecallTradeOff: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}.

---

##### `primaryKeyColumnName`<sup>Optional</sup> <a name="primaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```typescript
public readonly primaryKeyColumnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}.

---

### GlueMlTransformSchema <a name="GlueMlTransformSchema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

const glueMlTransformSchema: glueMlTransform.GlueMlTransformSchema = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesList <a name="GlueMlTransformInputRecordTablesList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

new glueMlTransform.GlueMlTransformInputRecordTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get"></a>

```typescript
public get(index: number): GlueMlTransformInputRecordTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformInputRecordTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>[]

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

new glueMlTransform.GlueMlTransformInputRecordTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueMlTransformInputRecordTables | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a> | cdktf.IResolvable

---


### GlueMlTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformParametersFindMatchesParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

new glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff">resetAccuracyCostTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">resetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff">resetPrecisionRecallTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">resetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccuracyCostTradeOff` <a name="resetAccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff"></a>

```typescript
public resetAccuracyCostTradeOff(): void
```

##### `resetEnforceProvidedLabels` <a name="resetEnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```typescript
public resetEnforceProvidedLabels(): void
```

##### `resetPrecisionRecallTradeOff` <a name="resetPrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff"></a>

```typescript
public resetPrecisionRecallTradeOff(): void
```

##### `resetPrimaryKeyColumnName` <a name="resetPrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```typescript
public resetPrimaryKeyColumnName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput">accuracyCostTradeOffInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">enforceProvidedLabelsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput">precisionRecallTradeOffInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">primaryKeyColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff">accuracyCostTradeOff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff">precisionRecallTradeOff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accuracyCostTradeOffInput`<sup>Optional</sup> <a name="accuracyCostTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput"></a>

```typescript
public readonly accuracyCostTradeOffInput: number;
```

- *Type:* number

---

##### `enforceProvidedLabelsInput`<sup>Optional</sup> <a name="enforceProvidedLabelsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```typescript
public readonly enforceProvidedLabelsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `precisionRecallTradeOffInput`<sup>Optional</sup> <a name="precisionRecallTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput"></a>

```typescript
public readonly precisionRecallTradeOffInput: number;
```

- *Type:* number

---

##### `primaryKeyColumnNameInput`<sup>Optional</sup> <a name="primaryKeyColumnNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```typescript
public readonly primaryKeyColumnNameInput: string;
```

- *Type:* string

---

##### `accuracyCostTradeOff`<sup>Required</sup> <a name="accuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff"></a>

```typescript
public readonly accuracyCostTradeOff: number;
```

- *Type:* number

---

##### `enforceProvidedLabels`<sup>Required</sup> <a name="enforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```typescript
public readonly enforceProvidedLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `precisionRecallTradeOff`<sup>Required</sup> <a name="precisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff"></a>

```typescript
public readonly precisionRecallTradeOff: number;
```

- *Type:* number

---

##### `primaryKeyColumnName`<sup>Required</sup> <a name="primaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```typescript
public readonly primaryKeyColumnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueMlTransformParametersFindMatchesParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformParametersOutputReference <a name="GlueMlTransformParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

new glueMlTransform.GlueMlTransformParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters">putFindMatchesParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFindMatchesParameters` <a name="putFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters"></a>

```typescript
public putFindMatchesParameters(value: GlueMlTransformParametersFindMatchesParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput">findMatchesParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput">transformTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType">transformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `findMatchesParameters`<sup>Required</sup> <a name="findMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters"></a>

```typescript
public readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a>

---

##### `findMatchesParametersInput`<sup>Optional</sup> <a name="findMatchesParametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```typescript
public readonly findMatchesParametersInput: GlueMlTransformParametersFindMatchesParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---

##### `transformTypeInput`<sup>Optional</sup> <a name="transformTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput"></a>

```typescript
public readonly transformTypeInput: string;
```

- *Type:* string

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType"></a>

```typescript
public readonly transformType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueMlTransformParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---


### GlueMlTransformSchemaList <a name="GlueMlTransformSchemaList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

new glueMlTransform.GlueMlTransformSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get"></a>

```typescript
public get(index: number): GlueMlTransformSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GlueMlTransformSchemaOutputReference <a name="GlueMlTransformSchemaOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktf/provider-aws'

new glueMlTransform.GlueMlTransformSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueMlTransformSchema;
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a>

---



