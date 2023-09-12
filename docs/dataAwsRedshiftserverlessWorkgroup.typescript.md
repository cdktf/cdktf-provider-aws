# `data_aws_redshiftserverless_workgroup`

Refer to the Terraform Registory for docs: [`data_aws_redshiftserverless_workgroup`](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/redshiftserverless_workgroup).

# `dataAwsRedshiftserverlessWorkgroup` Submodule <a name="`dataAwsRedshiftserverlessWorkgroup` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftserverlessWorkgroup <a name="DataAwsRedshiftserverlessWorkgroup" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/redshiftserverless_workgroup aws_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

new dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup(scope: Construct, id: string, config: DataAwsRedshiftserverlessWorkgroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig">DataAwsRedshiftserverlessWorkgroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig">DataAwsRedshiftserverlessWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId">workgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput">workgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint"></a>

```typescript
public readonly endpoint: DataAwsRedshiftserverlessWorkgroupEndpointList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a>

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```typescript
public readonly enhancedVpcRouting: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```typescript
public readonly workgroupNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftserverlessWorkgroupConfig <a name="DataAwsRedshiftserverlessWorkgroupConfig" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

const dataAwsRedshiftserverlessWorkgroupConfig: dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName">workgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsRedshiftserverlessWorkgroupEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

const dataAwsRedshiftserverlessWorkgroupEndpoint: dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint = { ... }
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

const dataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint: dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint = { ... }
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

const dataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface: dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftserverlessWorkgroupEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

new dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get"></a>

```typescript
public get(index: number): DataAwsRedshiftserverlessWorkgroupEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRedshiftserverlessWorkgroupEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

new dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint">vpcEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `vpcEndpoint`<sup>Required</sup> <a name="vpcEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint"></a>

```typescript
public readonly vpcEndpoint: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRedshiftserverlessWorkgroupEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

new dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get"></a>

```typescript
public get(index: number): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

new dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get"></a>

```typescript
public get(index: number): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

new dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer"></a>

```typescript
import { dataAwsRedshiftserverlessWorkgroup } from '@cdktf/provider-aws'

new dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface"></a>

```typescript
public readonly networkInterface: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a>

---



