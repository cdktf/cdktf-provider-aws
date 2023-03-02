# `dataAwsNeptuneOrderableDbInstance` Submodule <a name="`dataAwsNeptuneOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneOrderableDbInstance <a name="DataAwsNeptuneOrderableDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance aws_neptune_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer"></a>

```typescript
import { dataAwsNeptuneOrderableDbInstance } from '@cdktf/provider-aws'

new dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance(scope: Construct, id: string, config?: DataAwsNeptuneOrderableDbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig">DataAwsNeptuneOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig">DataAwsNeptuneOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses">resetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass"></a>

```typescript
public resetInstanceClass(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetPreferredInstanceClasses` <a name="resetPreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses"></a>

```typescript
public resetPreferredInstanceClasses(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc"></a>

```typescript
public resetVpc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct"></a>

```typescript
import { dataAwsNeptuneOrderableDbInstance } from '@cdktf/provider-aws'

dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement"></a>

```typescript
import { dataAwsNeptuneOrderableDbInstance } from '@cdktf/provider-aws'

dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsNeptuneOrderableDbInstance } from '@cdktf/provider-aws'

dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance">maxIopsPerDbInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib">maxIopsPerGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize">maxStorageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance">minIopsPerDbInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib">minIopsPerGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize">minStorageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable">multiAzCapable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable">readReplicaCapable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring">supportsEnhancedMonitoring</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication">supportsIamDatabaseAuthentication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops">supportsIops</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights">supportsPerformanceInsights</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption">supportsStorageEncryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput">preferredInstanceClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput">vpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc">vpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `maxIopsPerDbInstance`<sup>Required</sup> <a name="maxIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance"></a>

```typescript
public readonly maxIopsPerDbInstance: number;
```

- *Type:* number

---

##### `maxIopsPerGib`<sup>Required</sup> <a name="maxIopsPerGib" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib"></a>

```typescript
public readonly maxIopsPerGib: number;
```

- *Type:* number

---

##### `maxStorageSize`<sup>Required</sup> <a name="maxStorageSize" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize"></a>

```typescript
public readonly maxStorageSize: number;
```

- *Type:* number

---

##### `minIopsPerDbInstance`<sup>Required</sup> <a name="minIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance"></a>

```typescript
public readonly minIopsPerDbInstance: number;
```

- *Type:* number

---

##### `minIopsPerGib`<sup>Required</sup> <a name="minIopsPerGib" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib"></a>

```typescript
public readonly minIopsPerGib: number;
```

- *Type:* number

---

##### `minStorageSize`<sup>Required</sup> <a name="minStorageSize" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize"></a>

```typescript
public readonly minStorageSize: number;
```

- *Type:* number

---

##### `multiAzCapable`<sup>Required</sup> <a name="multiAzCapable" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable"></a>

```typescript
public readonly multiAzCapable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `readReplicaCapable`<sup>Required</sup> <a name="readReplicaCapable" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable"></a>

```typescript
public readonly readReplicaCapable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `supportsEnhancedMonitoring`<sup>Required</sup> <a name="supportsEnhancedMonitoring" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring"></a>

```typescript
public readonly supportsEnhancedMonitoring: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsIamDatabaseAuthentication`<sup>Required</sup> <a name="supportsIamDatabaseAuthentication" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication"></a>

```typescript
public readonly supportsIamDatabaseAuthentication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsIops`<sup>Required</sup> <a name="supportsIops" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops"></a>

```typescript
public readonly supportsIops: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsPerformanceInsights`<sup>Required</sup> <a name="supportsPerformanceInsights" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights"></a>

```typescript
public readonly supportsPerformanceInsights: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsStorageEncryption`<sup>Required</sup> <a name="supportsStorageEncryption" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption"></a>

```typescript
public readonly supportsStorageEncryption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `preferredInstanceClassesInput`<sup>Optional</sup> <a name="preferredInstanceClassesInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```typescript
public readonly preferredInstanceClassesInput: string[];
```

- *Type:* string[]

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput"></a>

```typescript
public readonly vpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `preferredInstanceClasses`<sup>Required</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses"></a>

```typescript
public readonly preferredInstanceClasses: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc"></a>

```typescript
public readonly vpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneOrderableDbInstanceConfig <a name="DataAwsNeptuneOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.Initializer"></a>

```typescript
import { dataAwsNeptuneOrderableDbInstance } from '@cdktf/provider-aws'

const dataAwsNeptuneOrderableDbInstanceConfig: dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc">vpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}.

---

##### `preferredInstanceClasses`<sup>Optional</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```typescript
public readonly preferredInstanceClasses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc"></a>

```typescript
public readonly vpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}.

---



