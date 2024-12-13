# `dataAwsSsoadminPrincipalApplicationAssignments` Submodule <a name="`dataAwsSsoadminPrincipalApplicationAssignments` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminPrincipalApplicationAssignments <a name="DataAwsSsoadminPrincipalApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments aws_ssoadmin_principal_application_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

new dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments(scope: Construct, id: string, config: DataAwsSsoadminPrincipalApplicationAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig">DataAwsSsoadminPrincipalApplicationAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig">DataAwsSsoadminPrincipalApplicationAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.putApplicationAssignments">putApplicationAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetApplicationAssignments">resetApplicationAssignments</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApplicationAssignments` <a name="putApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.putApplicationAssignments"></a>

```typescript
public putApplicationAssignments(value: IResolvable | DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.putApplicationAssignments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>[]

---

##### `resetApplicationAssignments` <a name="resetApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.resetApplicationAssignments"></a>

```typescript
public resetApplicationAssignments(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsoadminPrincipalApplicationAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isConstruct"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformElement"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformDataSource"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSsoadminPrincipalApplicationAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsoadminPrincipalApplicationAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsoadminPrincipalApplicationAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminPrincipalApplicationAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignments">applicationAssignments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignmentsInput">applicationAssignmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applicationAssignments`<sup>Required</sup> <a name="applicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignments"></a>

```typescript
public readonly applicationAssignments: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applicationAssignmentsInput`<sup>Optional</sup> <a name="applicationAssignmentsInput" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.applicationAssignmentsInput"></a>

```typescript
public readonly applicationAssignmentsInput: IResolvable | DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>[]

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments <a name="DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments.Initializer"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

const dataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments: dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments = { ... }
```


### DataAwsSsoadminPrincipalApplicationAssignmentsConfig <a name="DataAwsSsoadminPrincipalApplicationAssignmentsConfig" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.Initializer"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

const dataAwsSsoadminPrincipalApplicationAssignmentsConfig: dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#instance_arn DataAwsSsoadminPrincipalApplicationAssignments#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalId">principalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_id DataAwsSsoadminPrincipalApplicationAssignments#principal_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_type DataAwsSsoadminPrincipalApplicationAssignments#principal_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.applicationAssignments">applicationAssignments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>[]</code> | application_assignments block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#instance_arn DataAwsSsoadminPrincipalApplicationAssignments#instance_arn}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_id DataAwsSsoadminPrincipalApplicationAssignments#principal_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_type DataAwsSsoadminPrincipalApplicationAssignments#principal_type}.

---

##### `applicationAssignments`<sup>Optional</sup> <a name="applicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsConfig.property.applicationAssignments"></a>

```typescript
public readonly applicationAssignments: IResolvable | DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>[]

application_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/data-sources/ssoadmin_principal_application_assignments#application_assignments DataAwsSsoadminPrincipalApplicationAssignments#application_assignments}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList <a name="DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

new dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.get"></a>

```typescript
public get(index: number): DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>[]

---


### DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference <a name="DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataAwsSsoadminPrincipalApplicationAssignments } from '@cdktf/provider-aws'

new dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsSsoadminPrincipalApplicationAssignments.DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments">DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments</a>

---



