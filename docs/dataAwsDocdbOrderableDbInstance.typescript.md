# `dataAwsDocdbOrderableDbInstance` Submodule <a name="`dataAwsDocdbOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDocdbOrderableDbInstance <a name="DataAwsDocdbOrderableDbInstance" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance aws_docdb_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer"></a>

```typescript
import { dataAwsDocdbOrderableDbInstance } from '@cdktf/provider-aws'

new dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance(scope: Construct, id: string, config?: DataAwsDocdbOrderableDbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses">resetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass"></a>

```typescript
public resetInstanceClass(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetPreferredInstanceClasses` <a name="resetPreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses"></a>

```typescript
public resetPreferredInstanceClasses(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc"></a>

```typescript
public resetVpc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct"></a>

```typescript
import { dataAwsDocdbOrderableDbInstance } from '@cdktf/provider-aws'

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement"></a>

```typescript
import { dataAwsDocdbOrderableDbInstance } from '@cdktf/provider-aws'

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsDocdbOrderableDbInstance } from '@cdktf/provider-aws'

dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput">preferredInstanceClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput">vpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc">vpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `preferredInstanceClassesInput`<sup>Optional</sup> <a name="preferredInstanceClassesInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```typescript
public readonly preferredInstanceClassesInput: string[];
```

- *Type:* string[]

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput"></a>

```typescript
public readonly vpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `preferredInstanceClasses`<sup>Required</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses"></a>

```typescript
public readonly preferredInstanceClasses: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc"></a>

```typescript
public readonly vpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDocdbOrderableDbInstanceConfig <a name="DataAwsDocdbOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.Initializer"></a>

```typescript
import { dataAwsDocdbOrderableDbInstance } from '@cdktf/provider-aws'

const dataAwsDocdbOrderableDbInstanceConfig: dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc">vpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}.

---

##### `preferredInstanceClasses`<sup>Optional</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```typescript
public readonly preferredInstanceClasses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc"></a>

```typescript
public readonly vpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}.

---



