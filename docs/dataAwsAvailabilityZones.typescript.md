# `dataAwsAvailabilityZones` Submodule <a name="`dataAwsAvailabilityZones` Submodule" id="@cdktf/provider-aws.dataAwsAvailabilityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAvailabilityZones <a name="DataAwsAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones aws_availability_zones}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

new dataAwsAvailabilityZones.DataAwsAvailabilityZones(scope: Construct, id: string, config?: DataAwsAvailabilityZonesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig">DataAwsAvailabilityZonesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig">DataAwsAvailabilityZonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetAllAvailabilityZones">resetAllAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeNames">resetExcludeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeZoneIds">resetExcludeZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsAvailabilityZonesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsAvailabilityZonesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

---

##### `resetAllAvailabilityZones` <a name="resetAllAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetAllAvailabilityZones"></a>

```typescript
public resetAllAvailabilityZones(): void
```

##### `resetExcludeNames` <a name="resetExcludeNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeNames"></a>

```typescript
public resetExcludeNames(): void
```

##### `resetExcludeZoneIds` <a name="resetExcludeZoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeZoneIds"></a>

```typescript
public resetExcludeZoneIds(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList">DataAwsAvailabilityZonesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.groupNames">groupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference">DataAwsAvailabilityZonesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.zoneIds">zoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZonesInput">allAvailabilityZonesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNamesInput">excludeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIdsInput">excludeZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNames">excludeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIds">excludeZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filter"></a>

```typescript
public readonly filter: DataAwsAvailabilityZonesFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList">DataAwsAvailabilityZonesFilterList</a>

---

##### `groupNames`<sup>Required</sup> <a name="groupNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.groupNames"></a>

```typescript
public readonly groupNames: string[];
```

- *Type:* string[]

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsAvailabilityZonesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference">DataAwsAvailabilityZonesTimeoutsOutputReference</a>

---

##### `zoneIds`<sup>Required</sup> <a name="zoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.zoneIds"></a>

```typescript
public readonly zoneIds: string[];
```

- *Type:* string[]

---

##### `allAvailabilityZonesInput`<sup>Optional</sup> <a name="allAvailabilityZonesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZonesInput"></a>

```typescript
public readonly allAvailabilityZonesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeNamesInput`<sup>Optional</sup> <a name="excludeNamesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNamesInput"></a>

```typescript
public readonly excludeNamesInput: string[];
```

- *Type:* string[]

---

##### `excludeZoneIdsInput`<sup>Optional</sup> <a name="excludeZoneIdsInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIdsInput"></a>

```typescript
public readonly excludeZoneIdsInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsAvailabilityZonesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsAvailabilityZonesTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a> | cdktf.IResolvable

---

##### `allAvailabilityZones`<sup>Required</sup> <a name="allAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZones"></a>

```typescript
public readonly allAvailabilityZones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeNames`<sup>Required</sup> <a name="excludeNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNames"></a>

```typescript
public readonly excludeNames: string[];
```

- *Type:* string[]

---

##### `excludeZoneIds`<sup>Required</sup> <a name="excludeZoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIds"></a>

```typescript
public readonly excludeZoneIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAvailabilityZonesConfig <a name="DataAwsAvailabilityZonesConfig" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.Initializer"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

const dataAwsAvailabilityZonesConfig: dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeNames">excludeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeZoneIds">excludeZoneIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#id DataAwsAvailabilityZones#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#state DataAwsAvailabilityZones#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allAvailabilityZones`<sup>Optional</sup> <a name="allAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.allAvailabilityZones"></a>

```typescript
public readonly allAvailabilityZones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}.

---

##### `excludeNames`<sup>Optional</sup> <a name="excludeNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeNames"></a>

```typescript
public readonly excludeNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}.

---

##### `excludeZoneIds`<sup>Optional</sup> <a name="excludeZoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeZoneIds"></a>

```typescript
public readonly excludeZoneIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsAvailabilityZonesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#filter DataAwsAvailabilityZones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#id DataAwsAvailabilityZones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#state DataAwsAvailabilityZones#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsAvailabilityZonesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#timeouts DataAwsAvailabilityZones#timeouts}

---

### DataAwsAvailabilityZonesFilter <a name="DataAwsAvailabilityZonesFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.Initializer"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

const dataAwsAvailabilityZonesFilter: dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#name DataAwsAvailabilityZones#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#values DataAwsAvailabilityZones#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#name DataAwsAvailabilityZones#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#values DataAwsAvailabilityZones#values}.

---

### DataAwsAvailabilityZonesTimeouts <a name="DataAwsAvailabilityZonesTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.Initializer"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

const dataAwsAvailabilityZonesTimeouts: dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#read DataAwsAvailabilityZones#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#read DataAwsAvailabilityZones#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAvailabilityZonesFilterList <a name="DataAwsAvailabilityZonesFilterList" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

new dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get"></a>

```typescript
public get(index: number): DataAwsAvailabilityZonesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAvailabilityZonesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>[]

---


### DataAwsAvailabilityZonesFilterOutputReference <a name="DataAwsAvailabilityZonesFilterOutputReference" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

new dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAvailabilityZonesFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a> | cdktf.IResolvable

---


### DataAwsAvailabilityZonesTimeoutsOutputReference <a name="DataAwsAvailabilityZonesTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsAvailabilityZones } from '@cdktf/provider-aws'

new dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAvailabilityZonesTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a> | cdktf.IResolvable

---



