# `dataAwsEc2LocalGatewayRouteTable` Submodule <a name="`dataAwsEc2LocalGatewayRouteTable` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayRouteTable <a name="DataAwsEc2LocalGatewayRouteTable" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table aws_ec2_local_gateway_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig">DataAwsEc2LocalGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig">DataAwsEc2LocalGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId">resetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId">resetLocalGatewayRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn">resetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2LocalGatewayRouteTableFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEc2LocalGatewayRouteTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalGatewayId` <a name="resetLocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId"></a>

```typescript
public resetLocalGatewayId(): void
```

##### `resetLocalGatewayRouteTableId` <a name="resetLocalGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId"></a>

```typescript
public resetLocalGatewayRouteTableId(): void
```

##### `resetOutpostArn` <a name="resetOutpostArn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn"></a>

```typescript
public resetOutpostArn(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput">localGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput">localGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput">outpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2LocalGatewayRouteTableFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2LocalGatewayRouteTableFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localGatewayIdInput`<sup>Optional</sup> <a name="localGatewayIdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput"></a>

```typescript
public readonly localGatewayIdInput: string;
```

- *Type:* string

---

##### `localGatewayRouteTableIdInput`<sup>Optional</sup> <a name="localGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput"></a>

```typescript
public readonly localGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `outpostArnInput`<sup>Optional</sup> <a name="outpostArnInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput"></a>

```typescript
public readonly outpostArnInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEc2LocalGatewayRouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayRouteTableConfig <a name="DataAwsEc2LocalGatewayRouteTableConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

const dataAwsEc2LocalGatewayRouteTableConfig: dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn">outpostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2LocalGatewayRouteTableFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#filter DataAwsEc2LocalGatewayRouteTable#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}.

---

##### `localGatewayRouteTableId`<sup>Optional</sup> <a name="localGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}.

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2LocalGatewayRouteTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#timeouts DataAwsEc2LocalGatewayRouteTable#timeouts}

---

### DataAwsEc2LocalGatewayRouteTableFilter <a name="DataAwsEc2LocalGatewayRouteTableFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

const dataAwsEc2LocalGatewayRouteTableFilter: dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}.

---

### DataAwsEc2LocalGatewayRouteTableTimeouts <a name="DataAwsEc2LocalGatewayRouteTableTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

const dataAwsEc2LocalGatewayRouteTableTimeouts: dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayRouteTableFilterList <a name="DataAwsEc2LocalGatewayRouteTableFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2LocalGatewayRouteTableFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2LocalGatewayRouteTableFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>[]

---


### DataAwsEc2LocalGatewayRouteTableFilterOutputReference <a name="DataAwsEc2LocalGatewayRouteTableFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2LocalGatewayRouteTableFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a> | cdktf.IResolvable

---


### DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTable } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2LocalGatewayRouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a> | cdktf.IResolvable

---



