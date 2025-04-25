# `dataAwsVpcEndpointAssociations` Submodule <a name="`dataAwsVpcEndpointAssociations` Submodule" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcEndpointAssociations <a name="DataAwsVpcEndpointAssociations" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations aws_vpc_endpoint_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

new dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations(scope: Construct, id: string, config: DataAwsVpcEndpointAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig">DataAwsVpcEndpointAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig">DataAwsVpcEndpointAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpcEndpointAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isConstruct"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformElement"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsVpcEndpointAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpcEndpointAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpcEndpointAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpcEndpointAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList">DataAwsVpcEndpointAssociationsAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.associations"></a>

```typescript
public readonly associations: DataAwsVpcEndpointAssociationsAssociationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList">DataAwsVpcEndpointAssociationsAssociationsList</a>

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcEndpointAssociationsAssociations <a name="DataAwsVpcEndpointAssociationsAssociations" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

const dataAwsVpcEndpointAssociationsAssociations: dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations = { ... }
```


### DataAwsVpcEndpointAssociationsAssociationsDnsEntry <a name="DataAwsVpcEndpointAssociationsAssociationsDnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

const dataAwsVpcEndpointAssociationsAssociationsDnsEntry: dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry = { ... }
```


### DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry <a name="DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

const dataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry: dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry = { ... }
```


### DataAwsVpcEndpointAssociationsConfig <a name="DataAwsVpcEndpointAssociationsConfig" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

const dataAwsVpcEndpointAssociationsConfig: dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#vpc_endpoint_id DataAwsVpcEndpointAssociations#vpc_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#vpc_endpoint_id DataAwsVpcEndpointAssociations#vpc_endpoint_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcEndpointAssociationsAssociationsDnsEntryList <a name="DataAwsVpcEndpointAssociationsAssociationsDnsEntryList" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

new dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.get"></a>

```typescript
public get(index: number): DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference <a name="DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

new dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry">DataAwsVpcEndpointAssociationsAssociationsDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcEndpointAssociationsAssociationsDnsEntry;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry">DataAwsVpcEndpointAssociationsAssociationsDnsEntry</a>

---


### DataAwsVpcEndpointAssociationsAssociationsList <a name="DataAwsVpcEndpointAssociationsAssociationsList" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

new dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.get"></a>

```typescript
public get(index: number): DataAwsVpcEndpointAssociationsAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpcEndpointAssociationsAssociationsOutputReference <a name="DataAwsVpcEndpointAssociationsAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

new dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceAccessibility">associatedResourceAccessibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceArn">associatedResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.privateDnsEntry">privateDnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.resourceConfigurationGroupArn">resourceConfigurationGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations">DataAwsVpcEndpointAssociationsAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associatedResourceAccessibility`<sup>Required</sup> <a name="associatedResourceAccessibility" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceAccessibility"></a>

```typescript
public readonly associatedResourceAccessibility: string;
```

- *Type:* string

---

##### `associatedResourceArn`<sup>Required</sup> <a name="associatedResourceArn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceArn"></a>

```typescript
public readonly associatedResourceArn: string;
```

- *Type:* string

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DataAwsVpcEndpointAssociationsAssociationsDnsEntryList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsDnsEntryList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateDnsEntry`<sup>Required</sup> <a name="privateDnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.privateDnsEntry"></a>

```typescript
public readonly privateDnsEntry: DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList</a>

---

##### `resourceConfigurationGroupArn`<sup>Required</sup> <a name="resourceConfigurationGroupArn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.resourceConfigurationGroupArn"></a>

```typescript
public readonly resourceConfigurationGroupArn: string;
```

- *Type:* string

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcEndpointAssociationsAssociations;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations">DataAwsVpcEndpointAssociationsAssociations</a>

---


### DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList <a name="DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

new dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.get"></a>

```typescript
public get(index: number): DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference <a name="DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcEndpointAssociations } from '@cdktf/provider-aws'

new dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry</a>

---



