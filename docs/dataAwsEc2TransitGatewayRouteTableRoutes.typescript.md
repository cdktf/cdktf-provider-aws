# `dataAwsEc2TransitGatewayRouteTableRoutes` Submodule <a name="`dataAwsEc2TransitGatewayRouteTableRoutes` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTableRoutes <a name="DataAwsEc2TransitGatewayRouteTableRoutes" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes aws_ec2_transit_gateway_route_table_routes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes(scope: Construct, id: string, config: DataAwsEc2TransitGatewayRouteTableRoutesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig">DataAwsEc2TransitGatewayRouteTableRoutesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig">DataAwsEc2TransitGatewayRouteTableRoutesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2TransitGatewayRouteTableRoutesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableRoutes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTableRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2TransitGatewayRouteTableRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTableRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList">DataAwsEc2TransitGatewayRouteTableRoutesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList">DataAwsEc2TransitGatewayRouteTableRoutesRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2TransitGatewayRouteTableRoutesFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList">DataAwsEc2TransitGatewayRouteTableRoutesFilterList</a>

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.routes"></a>

```typescript
public readonly routes: DataAwsEc2TransitGatewayRouteTableRoutesRoutesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList">DataAwsEc2TransitGatewayRouteTableRoutesRoutesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2TransitGatewayRouteTableRoutesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableIdInput"></a>

```typescript
public readonly transitGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTableRoutesConfig <a name="DataAwsEc2TransitGatewayRouteTableRoutesConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayRouteTableRoutesConfig: dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableRoutes#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#id DataAwsEc2TransitGatewayRouteTableRoutes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2TransitGatewayRouteTableRoutesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#filter DataAwsEc2TransitGatewayRouteTableRoutes#filter}

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableRoutes#transit_gateway_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#id DataAwsEc2TransitGatewayRouteTableRoutes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsEc2TransitGatewayRouteTableRoutesFilter <a name="DataAwsEc2TransitGatewayRouteTableRoutesFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayRouteTableRoutesFilter: dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#name DataAwsEc2TransitGatewayRouteTableRoutes#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#values DataAwsEc2TransitGatewayRouteTableRoutes#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#name DataAwsEc2TransitGatewayRouteTableRoutes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/data-sources/ec2_transit_gateway_route_table_routes#values DataAwsEc2TransitGatewayRouteTableRoutes#values}.

---

### DataAwsEc2TransitGatewayRouteTableRoutesRoutes <a name="DataAwsEc2TransitGatewayRouteTableRoutesRoutes" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayRouteTableRoutesRoutes: dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTableRoutesFilterList <a name="DataAwsEc2TransitGatewayRouteTableRoutesFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayRouteTableRoutesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>[]

---


### DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayRouteTableRoutesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesFilter">DataAwsEc2TransitGatewayRouteTableRoutesFilter</a>

---


### DataAwsEc2TransitGatewayRouteTableRoutesRoutesList <a name="DataAwsEc2TransitGatewayRouteTableRoutesRoutesList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference <a name="DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayRouteTableRoutes } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.prefixListId">prefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.transitGatewayRouteTableAnnouncementId">transitGatewayRouteTableAnnouncementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes">DataAwsEc2TransitGatewayRouteTableRoutesRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableAnnouncementId`<sup>Required</sup> <a name="transitGatewayRouteTableAnnouncementId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.transitGatewayRouteTableAnnouncementId"></a>

```typescript
public readonly transitGatewayRouteTableAnnouncementId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayRouteTableRoutesRoutes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayRouteTableRoutes.DataAwsEc2TransitGatewayRouteTableRoutesRoutes">DataAwsEc2TransitGatewayRouteTableRoutesRoutes</a>

---



