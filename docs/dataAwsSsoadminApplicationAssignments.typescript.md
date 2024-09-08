# `dataAwsSsoadminApplicationAssignments` Submodule <a name="`dataAwsSsoadminApplicationAssignments` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminApplicationAssignments <a name="DataAwsSsoadminApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_application_assignments aws_ssoadmin_application_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

new dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments(scope: Construct, id: string, config: DataAwsSsoadminApplicationAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig">DataAwsSsoadminApplicationAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig">DataAwsSsoadminApplicationAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.putApplicationAssignments">putApplicationAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetApplicationAssignments">resetApplicationAssignments</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApplicationAssignments` <a name="putApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.putApplicationAssignments"></a>

```typescript
public putApplicationAssignments(value: IResolvable | DataAwsSsoadminApplicationAssignmentsApplicationAssignments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.putApplicationAssignments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>[]

---

##### `resetApplicationAssignments` <a name="resetApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetApplicationAssignments"></a>

```typescript
public resetApplicationAssignments(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsoadminApplicationAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isConstruct"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformElement"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformDataSource"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSsoadminApplicationAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsoadminApplicationAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsoadminApplicationAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_application_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminApplicationAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignments">applicationAssignments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignmentsInput">applicationAssignmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applicationAssignments`<sup>Required</sup> <a name="applicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignments"></a>

```typescript
public readonly applicationAssignments: DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `applicationAssignmentsInput`<sup>Optional</sup> <a name="applicationAssignmentsInput" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignmentsInput"></a>

```typescript
public readonly applicationAssignmentsInput: IResolvable | DataAwsSsoadminApplicationAssignmentsApplicationAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>[]

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminApplicationAssignmentsApplicationAssignments <a name="DataAwsSsoadminApplicationAssignmentsApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments.Initializer"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

const dataAwsSsoadminApplicationAssignmentsApplicationAssignments: dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments = { ... }
```


### DataAwsSsoadminApplicationAssignmentsConfig <a name="DataAwsSsoadminApplicationAssignmentsConfig" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.Initializer"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

const dataAwsSsoadminApplicationAssignmentsConfig: dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationArn">applicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationAssignments">applicationAssignments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>[]</code> | application_assignments block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}.

---

##### `applicationAssignments`<sup>Optional</sup> <a name="applicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationAssignments"></a>

```typescript
public readonly applicationAssignments: IResolvable | DataAwsSsoadminApplicationAssignmentsApplicationAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>[]

application_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_application_assignments#application_assignments DataAwsSsoadminApplicationAssignments#application_assignments}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList <a name="DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

new dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.get"></a>

```typescript
public get(index: number): DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsSsoadminApplicationAssignmentsApplicationAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>[]

---


### DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference <a name="DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataAwsSsoadminApplicationAssignments } from '@cdktf/provider-aws'

new dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsSsoadminApplicationAssignmentsApplicationAssignments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>

---



